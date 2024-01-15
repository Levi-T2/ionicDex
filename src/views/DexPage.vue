<template>
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>
                    Dex Tab
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
            <IonGrid>
                <IonRow>
                    <IonCol>

                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
</template>


<script setup lang="ts">
import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/vue';
import { pokeService } from '../services/PokeService'
async function getAllPokemon() {
    try {
        await pokeService.getAllPokemon()
    } catch (error) {
        console.log(error);
    }
}
getAllPokemon()
</script>


<style lang="scss" scoped></style>