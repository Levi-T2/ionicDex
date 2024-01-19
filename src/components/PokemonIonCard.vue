<template>
    <IonCard v-if="pokemon">
        <div class="center">
            <p class="mb-0">Default</p>
            <img :src="pokemon.sprites.front_default">
            <img :src="pokemon.sprites.back_default">
        </div>
        <div class="center">
            <p class="mb-0">Shiny</p>
            <img :src="pokemon.sprites.front_shiny">
            <img :src="pokemon.sprites.back_shiny">
        </div>
        <IonCardHeader>
            <IonCardTitle class="ion-text-capitalize">
                {{ pokemon.name }}
                <span class="order-txt">No. {{ pokemon.order }}</span>
            </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
            <IonItem>
                <IonLabel>
                    <h1 class="center">Attributes</h1>
                    <p>Height: {{ pokemon.height }}</p>
                    <p>Weight: {{ pokemon.weight }}</p>
                </IonLabel>
            </IonItem>
            <TypesAccordion :pokemon="pokemon" />
            <AbilityAccordion :pokemon="pokemon" />
        </IonCardContent>
    </IonCard>
</template>

<script setup lang="ts">
import { Pokemon } from '@/models/Pokemon';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel } from '@ionic/vue';
import AbilityAccordion from './AbilityAccordion.vue';
import TypesAccordion from './TypesAccordion.vue';

defineProps({
    pokemon: Pokemon
})
</script>


<style lang="scss" scoped>
.order-txt {
    font-size: 68.75%;
}

.center {
    text-align: center;
}

p {
    color: whitesmoke;
}
</style>