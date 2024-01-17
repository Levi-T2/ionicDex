<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonButton :disabled="true" v-if="offset <= 0">
                        <IonIcon slot="start" :icon="caretBack" />
                        Page
                    </IonButton>
                    <IonButton v-else @click="previousPage()">
                        <IonIcon slot="start" :icon="caretBack" />
                        Page
                    </IonButton>
                </IonButtons>
                <IonButtons slot="end">
                    <IonButton @click="nextPage()">
                        <IonIcon slot="end" :icon="caretForward" />
                        Page
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
            <PokemonIonList />
        </IonContent>
    </IonPage>
</template>


<script setup lang="ts">
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonToolbar } from '@ionic/vue';
import { caretBack, caretForward } from 'ionicons/icons';
import { pokeService } from '../services/PokeService'
import { ref } from 'vue';
import AppState from "@/Appstate";
import PokemonIonList from '@/components/PokemonIonList.vue';

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
        offset.value -= 9
        AppState.listOfPokemon = [];
        await pokeService.getAllPokemon(offset.value);
    } catch (error) {
        console.log(error);
    }
}

async function nextPage() {
    try {
        offset.value += 9;
        AppState.listOfPokemon = [];
        await pokeService.getAllPokemon(offset.value);
    } catch (error) {
        console.log(error);
    }
}

getAllPokemon()
</script>


<style lang="scss" scoped>
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