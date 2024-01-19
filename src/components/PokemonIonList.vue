<template>
    <IonList v-if="listOfPokemon.length">
        <IonItem role="button" @click="grabModal(pokemon)" v-for="pokemon in listOfPokemon" :key="pokemon.id">
            <IonAvatar slot="start">
                <img alt="Pokemon Sprite" :src="pokemon.sprites.front_default">
            </IonAvatar>
            <IonLabel class="ion-text-capitalize">
                {{ pokemon.name }}
            </IonLabel>
        </IonItem>
    </IonList>
    <IonList v-else>
        <IonItem>
            <p>Loading...</p>
        </IonItem>
    </IonList>
</template>


<script setup lang="ts">
import AppState from '@/Appstate';
import { Pokemon } from '@/models/Pokemon';
import { IonAvatar, IonItem, IonLabel, IonList, modalController } from '@ionic/vue';
import { computed } from 'vue';
import PokemonModal from './PokemonModal.vue';

const listOfPokemon = computed(() => AppState.listOfPokemon)

/* NOTE This function bellow brings in our modal from our components to our page using Ionics built in modalController
** This is the best way of doing this for this application, even though I believe Boostrap's modal implementation to be better.
** The function to remove this component or modal is located in the component, not here on this page. */
async function grabModal(pokemonPassed: Pokemon) {
    const modal = await modalController.create({
        component: PokemonModal,
        componentProps: {
            pokemon: pokemonPassed
        }
    });
    modal.present();
}
</script>