<template>
    <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonButton color="medium" @click="cancel">Cancel</IonButton>
            </IonButtons>
            <IonTitle>Pokemon Info</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
        <IonGrid v-if="pokemon">
            <IonRow>
                <IonCol size="12">
                    <PokemonIonCard :pokemon="pokemon" />
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonContent>
</template>


<script setup lang="ts">
import { Pokemon } from '@/models/Pokemon';
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    modalController,
    IonGrid,
    IonRow,
    IonCol,
} from '@ionic/vue';
import PokemonIonCard from './PokemonIonCard.vue';

defineProps({
    pokemon: Pokemon
})

const cancel = () => modalController.dismiss(null, 'cancel');
</script>