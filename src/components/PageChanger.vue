<template>
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
    <IonTitle>Page {{ pageNumber }}</IonTitle>
    <IonButtons slot="end">
        <IonButton :disabled="true" v-if="offset >= 1000">
            <IonIcon slot="end" :icon="caretForward" />
            Page
        </IonButton>
        <IonButton v-else @click="nextPage()">
            <IonIcon slot="end" :icon="caretForward" />
            Page
        </IonButton>
    </IonButtons>
</template>


<script setup lang="ts">
import AppState from '@/Appstate';
import { pokeService } from '@/services/PokeService';
import { ref } from 'vue';
import { caretBack, caretForward } from 'ionicons/icons';
import { IonButton, IonButtons, IonIcon, IonTitle } from '@ionic/vue';


const offset = ref(0);
const pageNumber = ref(1);

async function previousPage() {
    try {
        offset.value -= 18;
        pageNumber.value -= 1;
        AppState.listOfPokemon = [];
        await pokeService.getAllPokemon(offset.value);
    } catch (error) {
        console.log(error);
    }
}

async function nextPage() {
    try {
        offset.value += 18;
        pageNumber.value += 1;
        AppState.listOfPokemon = [];
        await pokeService.getAllPokemon(offset.value);
    } catch (error) {
        console.log(error);
    }
}
</script>