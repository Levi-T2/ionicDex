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
                                <IonCardTitle class="ion-text-capitalize">
                                    {{ pokemon.name }}
                                    <span class="order-txt">No. {{ pokemon.order }}</span>
                                </IonCardTitle>
                                <IonCardSubtitle>
                                    <div class="text-between">
                                        <p class="m-0">Height: {{ pokemon.height }}</p>
                                        <p class="m-0">Weight: {{ pokemon.weight }}</p>
                                    </div>
                                </IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <div class="stat-container">
                                    <p class="title-size">Abilities</p>
                                    <div class="text-between">
                                        <p class="ion-text-capitalize" v-if="pokemon.abilities[0]">{{
                                            pokemon.abilities[0].ability.name }}</p>
                                        <p v-if="pokemon.abilities[1]" title="Hidden Ability"
                                            class="ability ion-text-capitalize">{{
                                                pokemon.abilities[1].ability.name }}</p>
                                    </div>
                                    <IonButton expand="block" @click="grabModal(pokemon.abilities)">More Info
                                    </IonButton>
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
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow, modalController } from '@ionic/vue';
import { caretBack, caretForward } from 'ionicons/icons';
import { pokeService } from '../services/PokeService'
import { computed, ref } from 'vue';
import AppState from "@/Appstate";
import AbilityModal from '@/components/AbilityModal.vue';
import { AbilityArrayType } from "@/types/AbilityArrayType";

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

/* NOTE This function bellow brings in our modal from our components to our page using Ionics built in modalController
** This is the best way of doing this for this application, even though I believe Boostrap's modal implementation to be better.
** The function to remove this component or modal is located in the component, not here on this page. */
async function grabModal(ability: Array<AbilityArrayType>) {
    const modal = await modalController.create({
        component: AbilityModal,
    });
    modal.present();
    if (ability[1] != undefined) {
        await pokeService.getAbilityInfo(ability[0].ability.url, ability[1].ability.url);
    } else {
        await pokeService.getAbilityInfo(ability[0].ability.url);
    }
}

// const openModal = async () => {
//     const modal = await modalController.create({
//         component: AbilityModal,
//         componentProps: {
//             abilityInfo: { string: "hey" }
//         }
//     });
//     modal.present();
// };


getAllPokemon()
const listOfPokemon = computed(() => AppState.listOfPokemon)
</script>


<style lang="scss" scoped>
.ability {
    color: red;
}

.title-size {
    font-size: 1.45em;
}

.order-txt {
    font-size: 68.75%;
}

.stat-container {
    border: 1.5px solid gainsboro;
    border-radius: 1.5px;
    padding: 0.35rem;
}

.text-between {
    display: flex;
    justify-content: space-around;
    align-items: center;
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