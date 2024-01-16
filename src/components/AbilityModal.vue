<template>
    <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonButton color="medium" @click="cancel">Cancel</IonButton>
            </IonButtons>
            <IonTitle>Ability Info</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent class="ion-padding">
        <IonGrid>
            <IonRow>
                <IonCol v-if="abilityOne">
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle class="ion-text-capitalize">{{ abilityOne.name }}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent v-if="abilityOne.effect_entries != undefined">
                            <div v-if="abilityOne.effect_entries[0].language.name == 'en'">
                                <p>{{ abilityOne.effect_entries[0].effect }}</p>
                            </div>
                            <div v-else>
                                <p>{{ abilityOne.effect_entries[1].effect }}</p>
                            </div>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol v-if="abilityTwo">
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle class="ion-text-capitalize">{{ abilityTwo.name }}</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent v-if="abilityTwo.effect_entries != undefined">
                            <div v-if="abilityTwo.effect_entries[0].language.name == 'en'">
                                <p>{{ abilityTwo.effect_entries[0].effect }}</p>
                            </div>
                            <div v-else>
                                <p>{{ abilityTwo.effect_entries[1].effect }}</p>
                            </div>
                        </IonCardContent>
                    </IonCard>
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonContent>
</template>


<script setup lang="ts">
import AppState from '@/Appstate';
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
    IonCardContent,
} from '@ionic/vue';
import { computed } from 'vue';
// import { defineComponent } from 'vue';

const abilityOne = computed(() => AppState.activeAbilityOne);
const abilityTwo = computed(() => AppState.activeAbilityTwo);

const cancel = () => modalController.dismiss(null, 'cancel');
</script>


<style lang="scss" scoped></style>