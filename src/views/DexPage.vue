<template>
    <IonPage>
        <IonContent class="ion-padding">
            <IonGrid :fixed="true">
                <IonRow>
                    <IonCol class="start">
                        <IonButton :disabled="true" v-if="offset <= 0">
                            <IonIcon slot="start" :icon="caretBack" />
                            Page
                        </IonButton>
                        <IonButton v-else @click="previousPage()">
                            <IonIcon slot="start" :icon="caretBack" />
                            Page
                        </IonButton>
                    </IonCol>
                    <IonCol class="center">
                        <IonButton v-if="shiny == false" @click="shiny = true">Shiny</IonButton>
                        <IonButton v-else @click="shiny = false">Default</IonButton>
                    </IonCol>
                    <IonCol class="end">
                        <IonButton @click="nextPage()">
                            <IonIcon slot="end" :icon="caretForward" />
                            Page
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonGrid v-if="listOfPokemon.length">
                <IonRow>
                    <IonCol size="12" v-for="pokemon in listOfPokemon" :key="pokemon.id">
                        <IonCard>
                            <div v-if="shiny == false" class="center">
                                <img :src="pokemon.sprites.front_default">
                                <img :src="pokemon.sprites.back_default">
                            </div>
                            <div v-else class="center">
                                <img :src="pokemon.sprites.front_shiny">
                                <img :src="pokemon.sprites.back_shiny">
                            </div>
                            <IonCardHeader>
                                <IonCardTitle class="ion-text-capitalize">{{ pokemon.name }}</IonCardTitle>
                                <IonCardSubtitle>No. {{ pokemon.order }}</IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <p class="title-size">Attributes</p>
                                <div>
                                    <p>Height: {{ pokemon.height }}</p>
                                    <p>Weight: {{ pokemon.weight }}</p>
                                </div>
                                <p class="title-size">Abilities</p>
                                <div>
                                    <p v-if="pokemon.abilities[0]">{{ pokemon.abilities[0].ability.name }}</p>
                                    <p v-if="pokemon.abilities[1]" title="Hidden Ability" class="ability">{{
                                        pokemon.abilities[1].ability.name }}</p>
                                </div>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonGrid v-else>
                <IonRow>
                    <IonCol>
                        <p>No pokemon</p>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
</template>


<script setup lang="ts">
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow } from '@ionic/vue';
import { caretBack, caretForward } from 'ionicons/icons';
import { pokeService } from '../services/PokeService'
import { computed, ref } from 'vue';
import AppState from "@/Appstate";

const shiny = ref(false);
const offset = ref(0);

async function getAllPokemon() {
    try {
        await pokeService.getAllPokemon(offset.value);
    } catch (error) {
        console.log(error);
    }
}

async function previousPage() {
    try {
        offset.value -= 3
        AppState.listOfPokemon = [];
        await pokeService.getAllPokemon(offset.value);
    } catch (error) {
        console.log(error);
    }
}

async function nextPage() {
    try {
        offset.value += 3;
        AppState.listOfPokemon = [];
        await pokeService.getAllPokemon(offset.value);
    } catch (error) {
        console.log(error);
    }
}


getAllPokemon()
const listOfPokemon = computed(() => AppState.listOfPokemon)
</script>


<style lang="scss" scoped>
.ability {
    color: red;
}

.title-size {
    font-size: 1.45em;
    border-bottom: 1px solid gainsboro;
}

.start {
    text-align: start;
}

.center {
    text-align: center;
}

.end {
    text-align: end;
}
</style>