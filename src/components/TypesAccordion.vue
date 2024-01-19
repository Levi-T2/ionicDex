<template>
    <IonAccordionGroup>
        <IonItem>
            <IonLabel>
                <h1 class="center">Typing</h1>
            </IonLabel>
        </IonItem>
        <IonAccordion value="firstType">
            <IonItem v-if="pokemon?.types[0]" @click="getTypeInfo(pokemon.types[0].type.url)" slot="header">
                <IonLabel class="ion-text-capitalize">{{ pokemon.types[0].type.name }}</IonLabel>
            </IonItem>
            <div v-if="typeTwo.damage_relations != undefined" class="ion-padding" slot="content">
                <div v-if="typeTwo.damage_relations != undefined">
                    <div v-if="Object.keys(typeTwo.damage_relations.double_damage_from).length != 0">
                        <h2>Takes double damage from</h2>
                        <p class="ion-text-capitalize" v-for="type in typeTwo.damage_relations.double_damage_from"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeTwo.damage_relations.double_damage_to).length != 0">
                        <h2>Deals double damage to</h2>
                        <p class="ion-text-capitalize" v-for="type in typeTwo.damage_relations.double_damage_to"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeTwo.damage_relations.half_damage_from).length != 0">
                        <h2>Takes half damage from</h2>
                        <p class="ion-text-capitalize" v-for="type in typeTwo.damage_relations.half_damage_from"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeTwo.damage_relations.half_damage_to).length != 0">
                        <h2>Deals half damage to</h2>
                        <p class="ion-text-capitalize" v-for="type in typeTwo.damage_relations.half_damage_to"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeTwo.damage_relations.no_damage_from).length != 0">
                        <h2>Takes no damage from</h2>
                        <p class="ion-text-capitalize" v-for="type in typeTwo.damage_relations.no_damage_from"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeTwo.damage_relations.no_damage_to).length != 0">
                        <h2>Deals no damage to</h2>
                        <p class="ion-text-capitalize" v-for="type in typeTwo.damage_relations.no_damage_to"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                </div>
            </div>
            <div v-else class="ion-padding" slot="content">
                <div v-if="typeOne.damage_relations != undefined">
                    <div v-if="Object.keys(typeOne.damage_relations.double_damage_from).length != 0">
                        <h2>Takes double damage from</h2>
                        <p class="ion-text-capitalize" v-for="type in typeOne.damage_relations.double_damage_from"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeOne.damage_relations.double_damage_to).length != 0">
                        <h2>Deals double damage to</h2>
                        <p class="ion-text-capitalize" v-for="type in typeOne.damage_relations.double_damage_to"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeOne.damage_relations.half_damage_from).length != 0">
                        <h2>Takes half damage from</h2>
                        <p class="ion-text-capitalize" v-for="type in typeOne.damage_relations.half_damage_from"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeOne.damage_relations.half_damage_to).length != 0">
                        <h2>Deals half damage to</h2>
                        <p class="ion-text-capitalize" v-for="type in typeOne.damage_relations.half_damage_to"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeOne.damage_relations.no_damage_from).length != 0">
                        <h2>Takes no damage from</h2>
                        <p class="ion-text-capitalize" v-for="type in typeOne.damage_relations.no_damage_from"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeOne.damage_relations.no_damage_to).length != 0">
                        <h2>Deals no damage to</h2>
                        <p class="ion-text-capitalize" v-for="type in typeOne.damage_relations.no_damage_to"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                </div>
                <div v-else>
                    <p>Loading...</p>
                </div>
            </div>
        </IonAccordion>
        <IonAccordion value="secondType">
            <IonItem v-if="pokemon?.types[1]" @click="getTypeInfo(pokemon.types[1].type.url)" slot="header">
                <IonLabel class="ion-text-capitalize">{{ pokemon.types[1].type.name }}</IonLabel>
            </IonItem>
            <div v-if="typeTwo.damage_relations != undefined" class="ion-padding" slot="content">
                <div v-if="typeTwo.damage_relations != undefined">
                    <div v-if="Object.keys(typeTwo.damage_relations.double_damage_from).length != 0">
                        <h2>Takes double damage from</h2>
                        <p class="ion-text-capitalize" v-for="type in typeTwo.damage_relations.double_damage_from"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeTwo.damage_relations.double_damage_to).length != 0">
                        <h2>Deals double damage to</h2>
                        <p class="ion-text-capitalize" v-for="type in typeTwo.damage_relations.double_damage_to"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeTwo.damage_relations.half_damage_from).length != 0">
                        <h2>Takes half damage from</h2>
                        <p class="ion-text-capitalize" v-for="type in typeTwo.damage_relations.half_damage_from"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeTwo.damage_relations.half_damage_to).length != 0">
                        <h2>Deals half damage to</h2>
                        <p class="ion-text-capitalize" v-for="type in typeTwo.damage_relations.half_damage_to"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeTwo.damage_relations.no_damage_from).length != 0">
                        <h2>Takes no damage from</h2>
                        <p class="ion-text-capitalize" v-for="type in typeTwo.damage_relations.no_damage_from"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeTwo.damage_relations.no_damage_to).length != 0">
                        <h2>Deals no damage to</h2>
                        <p class="ion-text-capitalize" v-for="type in typeTwo.damage_relations.no_damage_to"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                </div>
            </div>
            <div v-else class="ion-padding" slot="content">
                <div v-if="typeOne.damage_relations != undefined">
                    <div v-if="Object.keys(typeOne.damage_relations.double_damage_from).length != 0">
                        <h2>Takes double damage from</h2>
                        <p class="ion-text-capitalize" v-for="type in typeOne.damage_relations.double_damage_from"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeOne.damage_relations.double_damage_to).length != 0">
                        <h2>Deals double damage to</h2>
                        <p class="ion-text-capitalize" v-for="type in typeOne.damage_relations.double_damage_to"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeOne.damage_relations.half_damage_from).length != 0">
                        <h2>Takes half damage from</h2>
                        <p class="ion-text-capitalize" v-for="type in typeOne.damage_relations.half_damage_from"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeOne.damage_relations.half_damage_to).length != 0">
                        <h2>Deals half damage to</h2>
                        <p class="ion-text-capitalize" v-for="type in typeOne.damage_relations.half_damage_to"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeOne.damage_relations.no_damage_from).length != 0">
                        <h2>Takes no damage from</h2>
                        <p class="ion-text-capitalize" v-for="type in typeOne.damage_relations.no_damage_from"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
                    <div v-if="Object.keys(typeOne.damage_relations.no_damage_to).length != 0">
                        <h2>Deals no damage to</h2>
                        <p class="ion-text-capitalize" v-for="type in typeOne.damage_relations.no_damage_to"
                            :key="type.url">
                            {{ type.name }}
                        </p>
                    </div>
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
    pokemon: Pokemon
})

async function getTypeInfo(typeUrl: string) {
    try {
        await pokeService.getTypeInfo(typeUrl);
    } catch (error) {
        console.log(error);
    }
}




const typeOne = computed(() => AppState.activeTypeOne);
const typeTwo = computed(() => AppState.activeTypeTwo);
</script>