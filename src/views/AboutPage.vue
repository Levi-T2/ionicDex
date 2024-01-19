<template>
    <IonPage>
        <IonContent class="ion-padding">
            <IonItem>
                <IonLabel>
                    <h1>About This App</h1>
                    <p>I made this app as practice with using Axios with Typescript and using Ionic7 with their built in
                        tools and components. While designed for mobile, this app also works for desktop.</p>
                    <p>This apps functionality includes querying the pokemonAPI for specific pokemon by name, as well as
                        the dex page that allows you to view a paged list of pokemon and their details.</p>
                    <p>For the pokemon details, I utilized Ionics built in modalController for the functionality of the
                        pokemon details, as well as many other ionic only components.</p>
                    <p>Additionally, I learned better how to type variables and exporting types to use with the
                        constructors and models for data.</p>
                    <p>Creating this app helped me better understand TypeScript and Ionic, and I'm happy to have developed
                        it.</p>
                </IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>
                    <h1>Links to Socials</h1>
                    <IonButtons class="between">
                        <IonButton href="https://www.linkedin.com/in/levi-tyler-54a4911b6/">
                            <IonIcon :icon="logoLinkedin" />
                        </IonButton>
                        <IonButton href="https://github.com/Levi-T2">
                            <IonIcon :icon="logoGithub" />
                        </IonButton>
                    </IonButtons>
                </IonLabel>
            </IonItem>
        </IonContent>
    </IonPage>
</template>
  
<script setup lang="ts">
import { IonPage, IonContent, IonItem, IonLabel, IonButton, IonIcon, IonButtons } from '@ionic/vue';
import { logoLinkedin, logoGithub } from 'ionicons/icons';
</script>

<style lang="scss" scoped>
p {
    margin-top: 0.5rem;
    color: whitesmoke;
}

.between {
    display: flex;
    justify-content: space-around;
}
</style>
  