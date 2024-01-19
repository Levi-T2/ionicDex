<template>
    <IonAccordionGroup>
        <IonItem>
            <IonLabel>
                <h1 class="center">Abilities</h1>
            </IonLabel>
        </IonItem>
        <IonAccordion value="firstAbility">
            <IonItem v-if="pokemon?.abilities[0]" @click="getAbilityInfo(pokemon.abilities[0].ability.url)" slot="header">
                <IonLabel class="ion-text-capitalize">{{ pokemon.abilities[0].ability.name }}</IonLabel>
            </IonItem>
            <div v-if="abilityTwo.effect_entries != undefined" class="ion-padding" slot="content">
                <div v-if="abilityTwo.effect_entries != undefined">
                    <p v-if="abilityTwo.effect_entries[0].language.name == 'en'">
                        {{ abilityTwo.effect_entries[0].effect }}</p>
                    <p v-else>{{ abilityTwo.effect_entries[1].effect }}</p>
                </div>
            </div>
            <div v-else class="ion-padding" slot="content">
                <div v-if="abilityOne.effect_entries != undefined">
                    <p v-if="abilityOne.effect_entries[0].language.name == 'en'">{{
                        abilityOne.effect_entries[0].effect }}</p>
                    <p v-else>{{ abilityOne.effect_entries[1].effect }}</p>
                </div>
                <div v-else>
                    <p>Loading...</p>
                </div>
            </div>
        </IonAccordion>
        <IonAccordion value="secondAbility">
            <IonItem v-if="pokemon?.abilities[1]" @click="getAbilityInfo(pokemon.abilities[1].ability.url)" slot="header">
                <IonLabel class="ion-text-capitalize">{{ pokemon.abilities[1].ability.name }}
                </IonLabel>
            </IonItem>
            <div v-if="abilityTwo.effect_entries != undefined" class="ion-padding" slot="content">
                <div v-if="abilityTwo.effect_entries != undefined">
                    <p v-if="abilityTwo.effect_entries[0].language.name == 'en'">
                        {{ abilityTwo.effect_entries[0].effect }}</p>
                    <p v-else>{{ abilityTwo.effect_entries[1].effect }}</p>
                </div>
            </div>
            <div v-else class="ion-padding" slot="content">
                <div v-if="abilityOne.effect_entries != undefined">
                    <p v-if="abilityOne.effect_entries[0].language.name == 'en'">{{
                        abilityOne.effect_entries[0].effect }}</p>
                    <p v-else>{{ abilityOne.effect_entries[1].effect }}</p>
                </div>
                <div v-else>
                    <p>Loading...</p>
                </div>
            </div>
        </IonAccordion>
    </IonAccordionGroup>
</template>


<script setup lang="ts">
import AppState from '@/Appstate';
import { Pokemon } from '@/models/Pokemon';
import { pokeService } from '@/services/PokeService';
import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/vue';
import { computed } from 'vue';


defineProps({
    pokemon: Pokemon,
})

async function getAbilityInfo(abilityUrl: string) {
    try {
        await pokeService.getAbilityInfo(abilityUrl);
    } catch (error) {
        console.log(error);
    }
}

const abilityOne = computed(() => AppState.activeAbilityOne);
const abilityTwo = computed(() => AppState.activeAbilityTwo);
</script>


<style lang="scss" scoped>
.center {
    text-align: center;
}

p {
    color: whitesmoke;
}
</style>