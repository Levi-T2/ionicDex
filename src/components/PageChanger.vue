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
    <IonButtons slot="end">
        <IonButton @click="nextPage()">
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
import { IonButton, IonButtons, IonIcon } from '@ionic/vue';


const offset = ref(0);

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
</script>


<style lang="scss" scoped></style>