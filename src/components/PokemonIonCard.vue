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
            <!-- <IonItem>
                <IonLabel>
                    <h1 class="center">Typing</h1>
                    <p class="ion-text-capitalize">
                        {{ pokemon.types[0].type.name }}</p>
                    <p class="ion-text-capitalize" v-if="pokemon.types[1] != undefined">{{ pokemon.types[1].type.name }}</p>
                </IonLabel>
            </IonItem> -->
            <IonAccordionGroup>
                <IonItem>
                    <IonLabel>
                        <h1 class="center">Typing</h1>
                    </IonLabel>
                </IonItem>
                <IonAccordion value="firstType">
                    <IonItem v-if="pokemon.types[0]" @click="getTypeInfo(pokemon.types[0].type.url)" slot="header">
                        <IonLabel class="ion-text-capitalize">{{ pokemon.types[0].type.name }}</IonLabel>
                    </IonItem>
                    <div v-if="typeOne.damage_relations" class="ion-padding" slot="content">
                        <h2>Takes 2x damage from</h2>
                        <div v-if="Object.keys(typeOne.damage_relations.double_damage_from).length != 0">
                            <p class="ion-text-capitalize" v-for="type in typeOne.damage_relations.double_damage_from"
                                :key="type.url">
                                {{ type.name }}
                            </p>
                        </div>
                    </div>
                    <div v-else class="ion-padding" slot="content">
                        <p>Loading...</p>
                    </div>
                </IonAccordion>
                <IonAccordion value="secondType">
                    <IonItem v-if="pokemon.types[1]" @click="getTypeInfo(pokemon.types[1].type.url)" slot="header">
                        <IonLabel class="ion-text-capitalize">{{ pokemon.types[1].type.name }}</IonLabel>
                    </IonItem>
                    <div v-if="typeTwo" class="ion-padding" slot="content">
                        <p>{{ typeTwo.damage_relations }}</p>
                    </div>
                    <div v-else class="ion-padding" slot="content">
                        <p>Loading...</p>
                    </div>
                </IonAccordion>
            </IonAccordionGroup>
            <IonAccordionGroup>
                <IonItem>
                    <IonLabel>
                        <h1 class="center">Abilities</h1>
                    </IonLabel>
                </IonItem>
                <IonAccordion value="firstAbility">
                    <IonItem v-if="pokemon.abilities[0]" @click="getAbilityInfo(pokemon.abilities[0].ability.url)"
                        slot="header">
                        <IonLabel class="ion-text-capitalize">{{ pokemon.abilities[0].ability.name }}</IonLabel>
                    </IonItem>
                    <div v-if="abilityOne.effect_entries != undefined" class="ion-padding" slot="content">
                        <p v-if="abilityOne.effect_entries[0].language.name == 'en'">{{
                            abilityOne.effect_entries[0].effect }}</p>
                        <p v-else>{{ abilityOne.effect_entries[1].effect }}</p>
                    </div>
                    <div v-else class="ion-padding" slot="content">
                        <p>Loading...</p>
                    </div>
                </IonAccordion>
                <IonAccordion value="secondAbility">
                    <IonItem v-if="pokemon.abilities[1]" @click="getAbilityInfo(pokemon.abilities[1].ability.url)"
                        slot="header">
                        <IonLabel class="ion-text-capitalize">{{ pokemon.abilities[1].ability.name }}
                        </IonLabel>
                    </IonItem>
                    <div v-if="abilityTwo.effect_entries != undefined" class="ion-padding" slot="content">
                        <p v-if="abilityTwo.effect_entries[0].language.name == 'en'">
                            {{ abilityTwo.effect_entries[0].effect }}</p>
                        <p v-else>{{ abilityTwo.effect_entries[1].effect }}</p>
                    </div>
                    <div v-else class="ion-padding" slot="content">
                        <p>Loading...</p>
                    </div>
                </IonAccordion>
            </IonAccordionGroup>
        </IonCardContent>
    </IonCard>
</template>


<script setup lang="ts">
import AppState from '@/Appstate';
import { Pokemon } from '@/models/Pokemon';
import { pokeService } from '@/services/PokeService';
import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel } from '@ionic/vue';
import { computed } from 'vue';


defineProps({
    pokemon: Pokemon
})

async function getAbilityInfo(abilityUrl: string) {
    try {
        await pokeService.getAbilityInfo(abilityUrl);
    } catch (error) {
        console.log(error);
    }
}

async function getTypeInfo(typeUrl: string) {
    try {
        await pokeService.getTypeInfo(typeUrl);
    } catch (error) {
        console.log(error);
    }
}

const abilityOne = computed(() => AppState.activeAbilityOne);
const abilityTwo = computed(() => AppState.activeAbilityTwo);

const typeOne = computed(() => AppState.activeTypeOne);
const typeTwo = computed(() => AppState.activeTypeTwo);
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