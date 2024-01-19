<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <PageChanger />
            </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
            <PokemonIonList />
        </IonContent>
    </IonPage>
</template>


<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/vue';
import { pokeService } from '../services/PokeService'
import PokemonIonList from '@/components/PokemonIonList.vue';
import PageChanger from '@/components/PageChanger.vue';
import { onMounted } from 'vue';

async function getAllPokemon() {
    try {
        await pokeService.getAllPokemon(0);
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getAllPokemon();
})


</script>