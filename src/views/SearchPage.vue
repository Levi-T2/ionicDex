<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Search Pokemon</IonTitle>
            </IonToolbar>
            <IonToolbar>
                <IonSearchbar @ion-change="searchPokemon()" v-model="pokemonName"></IonSearchbar>
            </IonToolbar>
        </IonHeader>
        <IonContent v-if="Object.keys(pokemon).length != 0" class="ion-padding">
            <PokemonIonCard :pokemon="pokemon" />
        </IonContent>
    </IonPage>
</template>
  
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonContent, IonSearchbar, IonTitle } from '@ionic/vue';
import AppState from '@/Appstate';
import { ref, computed } from 'vue';
import { pokeService } from '@/services/PokeService';
import PokemonIonCard from '@/components/PokemonIonCard.vue';

const pokemonName = ref("")

async function searchPokemon() {
    try {
        let name = pokemonName.value;
        // NOTE The pokemon API will not work if a name is passed 
        // with an uppercase character, so this insures that whatever gets entered into the input will be changed to all lowercase.
        name = name.toLowerCase();
        await pokeService.searchPokemon(name);
    } catch (error) {
        console.log(error);
    }
}

const pokemon = computed(() => AppState.searchedPokemon)
</script>