<template>
    <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonButton color="medium" @click="cancel">Cancel</IonButton>
            </IonButtons>
            <IonTitle>Info</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
        <IonGrid v-if="pokemon">
            <IonRow>
                <IonCol size="12">
                    <IonCard>
                        <div class="center">
                            <img :src="pokemon.sprites.front_default">
                            <img :src="pokemon.sprites.back_default">
                        </div>
                        <div class="center">
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
                                <!-- <IonButton expand="block" @click="grabModal(pokemon.abilities)">More Info
                                    </IonButton> -->
                            </div>
                        </IonCardContent>
                    </IonCard>
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
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
} from '@ionic/vue';

defineProps({
    pokemon: Pokemon
})

const cancel = () => modalController.dismiss(null, 'cancel');
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
</style>