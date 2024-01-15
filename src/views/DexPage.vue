<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    <IonButton @click="getAllPokemon()">See Pokemon</IonButton>
                    <IonButton v-if="shiny == false" @click="shiny = true">See Shiny</IonButton>
                    <IonButton v-else @click="shiny = false">See Default</IonButton>
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
            <IonGrid v-if="listOfPokemon.length">
                <IonRow>
                    <IonCol size="12" v-for="pokemon in listOfPokemon" :key="pokemon.id">
                        <IonCard>
                            <div v-if="shiny == false">
                                <img :src="pokemon.sprites.front_default">
                                <img :src="pokemon.sprites.back_default">
                            </div>
                            <div v-else>
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
                                    <p>{{ pokemon.abilities[0].ability.name }}</p>
                                    <p title="Hidden Ability" class="ability">{{ pokemon.abilities[1].ability.name }}</p>
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
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/vue';
import { pokeService } from '../services/PokeService'
import { computed, ref } from 'vue';
import AppState from "@/Appstate";

const shiny = ref(false)

async function getAllPokemon() {
    try {
        await pokeService.getAllPokemon()
    } catch (error) {
        console.log(error);
    }
}

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
</style>