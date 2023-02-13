<script setup lang="ts">
const courses = ref([
  {
    title: '1:1 Personaltraining',
    description: [
      'Was braucht dein Körper wirklich, wie wirst du schmerzfrei und befreist dich von deinen "Problemzonen"',
      'Wie lässt sich dein persönlicher Trainingsplan einfach und zeitsparend in deinen Alltag integrieren.',
      'Und wie genau locken wir deinen Schweinehund mit zu machen.'
    ],
    cta: {
      text: 'Kostenloses Erstgespräch',
      url: '#kontakt'
    }
  },
  {
    title: '1:1 Coaching Einzelsitzung',
    description: [
      'Wir schauen deine größte Herausforderung im Thema Essen & gesunder Bewegung an.',
      'Die Vorsätze sind da, doch du scheiterst immer wieder an der Umsetzung?',
      'Gemeinsam finden wir dein Warum und lösen die Handbremse!'
    ],
    cta: {
      text: 'Kostenloses Erstgespräch',
      url: '#kontakt'
    }
  },
  {
    title: '1:1 Coachingpaket',
    description: [
      'Du möchtest dein Thema in Tiefe lösen? ',
      'Dann buche 5 oder 10 Sitzungen und finde endlich Frieden mit dem Essen und deiner Figur!'
    ],
    cta: {
      text: 'Kostenloses Erstgespräch',
      url: '#kontakt'
    }
  },
  {
    title: 'DeESSkalation',
    description: [
      'Schluss mit Heißhungerattacken, Essanfällen & Diäten!',
      'Lerne wie du die ständigen Gedanken ans Essen los wirst, dir nicht mehr verbieten musst und dich gleichzeitig wieder wohl in deinem Körper fühlst.',
      'Im intensiven & persönlicher Online Kurs finden wir gemeinsam in deinem Tempo heraus, was bei dir wirklich funktioniert.'
    ],
    cta: {
      text: 'weitere Infos',
      url: 'https://www.wetimes.de'
    }
  },
  {
    title: 'Fitnessroutine',
    description: [
      'Endlich dauerhaft fit und gesund fühlen.',
      'Ganzheitliche Onlinefitness die Bewegung und Ernährung endlich selbstverständlich werden lässt und das ganz ohne Kraftakt und riesigem Zeitaufwand.',
      'Dein Schweinehund wird zum Freund der dich unterstützt.',
      'Stress zu reduzieren, um Zeit zu finden für Dinge, die dich gut fühlen lässt.'
    ],
    cta: {
      text: 'weitere Infos',
      url: 'https://www.wetimes.de'
    }
  },
  {
    title: 'Mamakurse',
    description: [
      'Besonders als Mama brauchst du körperliche und mentale Stärke.',
      'Meine Onlinekurse helfen dir dabei!',
      'Ob sportliche Rückbildung, Beckenbodenfit, Rektusdiastasenschliessung oder Fit durchs 1. Babyjahr.',
      'Ich bring dich in deine Kraft. Schreib mir für mehr Details.'
    ],
    cta: {
      text: 'weitere Infos',
      url: 'https://www.wetimes.de'
    }
  }
])
</script>

<template>
  <div>
    <header class="hero pt-32 md:pt-40 lg:pt-32 xl:pt-40 pb-96 lg:pb-20 xl:pb-32 bg-white relative">
      <div class="hero-background absolute top-0 w-full h-full bg-[url('/bg.jpg')] bg-[size:100%_auto]">
        <NuxtPicture src="/carina-karmann.png" sizes="sm:640px md:970px" alt="Carina Karmann" class="absolute right-0 bottom-0"  />
        <!-- <NuxtPicture src="/bg.jpg" alt="background-pattern" class="w-full h-full object-cover object-center"  /> -->
        
        
        <!-- <div class="absolute top-0 w-full h-full bg-gradient-to-t from-black to-gray-800 opacity-80 lg:opacity-60 xl:hidden"></div> -->
        <!-- <div v-if="props.fullBackground" class="absolute top-0 w-full h-full bg-gradient-to-r from-gray-800 via-gray-800 via-transparent opacity-60"></div> -->
      </div>
      
      <div class="container relative z-1 max-w-screen-2xl">
        <div class="prose prose-xl max-w-2xl text-white">
        
          
          <!-- <h3 class="font-headline text-white">Fitness / Ernährung / Bewusstsein</h3> -->
          <h3 class="inline-block text-secondary px-2">Fitness / Ernährung / Bewusstsein - <br />Ich bringe dich in deine Kraft</h3>
          <h1 class="text-primary mt-12 mb-12">Carina Karmann</h1>
          
          <p>Schluss mit einem zwickendem Körper, Energielosigkeit und ewigen Diäten! Ich zeig dir, wie du dich endlich dauerhaft in deinem Körper wohlfühlst!</p>
          
          <p>Lerne ganzheitlich durch Körperbewusstsein dich gesund zu bewegen, intuitiv zu essen und stressfrei zu leben. Ganz ohne quälende Sporteinheiten und Verbote. Fit und gesund sein darf Spaß machen, Essen auch!</p>

          <p class="mt-12"><a class="btn btn-primary text-white no-underline px-6 py-2" href="#kontakt">Termin vereinbaren</a></p>
        </div>
      </div>
    </header>

    <section>
      <div class="container prose max-w-screen-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 class="mt-1 mb-8 text-secondary">Hi, ich bin Carina! </h2>
            <p>als Expertin für Körperbewusstsein unterstützte ich dich dabei, voller Energie und Lebenskraft durch deinen Alltag zu gehen. Ich zeige dir, wie du im Einklang mit deinem Körper fit wirst und Frieden mit dem Essen schließt.</p>
            <p>Das Leben und der eigene jahrelanger Kampf haben mir eindeutig gezeigt: um sich gesund und gut im Körper zu fühlen ist mehr notwendig, als diszipliniert dem richtigen Trainings- und Ernährungsplan zu folgen.</p>
            <p>Auch als Personaltrainerin und Coachin erlebe ich, dass es mehr die Herausforderungen hinter diesen Plänen sind. Beim Lösen deiner Handbremse stehe ich dir mit Herzblut, all meiner eigenen Erfahrung, dem Wissen als Personaltrainerin und dem Knowhow als Coach bei. </p>
          </div>

          <div>
            <NuxtImg src="/carina-2.png" />
          </div>
          
        </div>
      <!-- </div>
    </section>

    <section>
      <div class="container prose max-w-screen-2xl"> -->
        <div class="text-center mt-24">
          <h2 class="mt-1 mb-8 text-secondary">Mein Angebot - Was brauchst du?</h2>
          <p>Buche dein kostenfreies Erstgespräch und wir finden den idealen Weg für dich!</p>
        </div>


        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-24">
          <div v-for="(course, index) in courses" class="card flex flex-col justify-between	">
            <div>
              <h4 class="mt-0 min-h-[3rem]">{{ course.title }}</h4>
              <div>
                <p v-for="(p, cdindex) in course.description" :key="'p-' + cdindex">{{ p }}</p>
              </div>
            </div>
            
            <NuxtLink :to="course.cta.url" class="btn btn-primary text-white no-underline">{{ course.cta.text }}</NuxtLink>
          </div>
        </div>

      </div>
    </section>

    <section class="bg-gray-50/40">
      <div class="container prose max-w-screen-2xl">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-secondary">Kennst du das?</h2>
            <ul>
              <li>Du fühlst dich kraftlos und ausgepowert?</li>
              <li>Dein Körper zwickt und zwackt und wohl fühlst du dich in deiner Haut schon lange nicht mehr?</li>
              <li>Genervt nimmst du dir mal wieder fest vor, endlich abzunehmen und eine neue Diät auszuprobieren?</li>
              <li>Du hast das Gefühl andere sind einfach disziplinierter, "ich bekomme das auf Dauer einfach nicht hin"?</li> 
              <li>Du weißt du müsstest endlich wieder was für dich tun?</li>
            </ul>
            <p>Aber letztlich tobst du durch den Tag, arbeitest ToDo´s ab und meisterst den Spagat zwischen Job und Familie so gut es geht. Gestresst und abgeschlagen stellst du dir die Frage "Training, Entspannung oder gesunde Ernährung - wann soll ich das noch machen?" Dir fehlt schlicht die Motivation und Energie nach einem lagen Tag…</p>
          </div>
          <div>
            <NuxtImg src="/ausgepowert.png" />
          </div>
        </div>

        
        <h3 class="font-bold text-primary text-center mt-16">Schnauze voll davon?</h3>
        <p class="text-center">Dann mach Schluss damit und komm zu mir. Lass uns gemeinsam rausfinden, wie wir das gemeinsam ändern.</p>
        <p class="text-center mb-24"><NuxtLink class="btn btn-primary text-white no-underline" to="#kontakt">Kostenlose Erstberatung</NuxtLink></p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <NuxtImg src="/froehlich.png" />
          </div>
          <div>
            <h2 class="text-primary">Du wünscht dir:</h2>
            <ul>
              <li>Einen gesunden Körper in dem du dich schön und wohl fühlst</li>
              <li>Ernährung die sich leicht anfühlt ohne ständig darüber nachdenken zu müssen</li>
              <li>Gelassenheit um entspannt und energiegeladen durch den Alltag zu gehen</li>
            </ul>
            <h2 class="text-primary">Ich bring dich in deine Kraft!</h2>
            <ul>
              <li>Mit kleinen Tricks, dem richtigen Körperbewusstsein und dem nötigen Motivationsschub wird Bewegung und Ernährung endlich selbstverständlich und das ganz ohne Kraftakt und riesigem Zeitaufwand.</li>
              <li>Gemeinsam finden wir raus, wie sich Bewegung und gesunde Ernährung einfach in dein Leben integrieren lassen und was deinem Körper wirklich gut tut.</li>
              <li>Wir machen gemeinsam deinen inneren Schweinehund zum Freund und entlarven, was dich wirklich ausbremst all das umzusetzen und immer wieder auf morgen zu schieben.</li>
              <li>Ich unterstütze dich dabei deinen Stress zu reduzieren und Dinge sein zu lassen, die dir nicht gut tun, um Zeit zu finden für Dinge, die dich gut fühlen lässt.</li>
            </ul>
            <p>Du willst dich auch endlich in deinem Körper und mit deiner Figur wohl fühlen? Zeit voller Energie und Lebenskraft durch deinen Alltag zu gehen.</p>
            <p>Vereinbare gleich deinen Beratungstermin und wir finden den idealen Weg für dich.</p>
          </div>
        </div>

        
      </div>
    </section>

    <section id="kontakt">
      <div class="container prose max-w-screen-2xl">
        <div class="text-center mt-24">
          <h2 class="mt-1 mb-8 text-secondary">Kontakt</h2>
          <p>Buche dein kostenfreies Erstgespräch und wir finden den idealen Weg für dich!</p>
          <p class="font-bold">Carina Karmann</p>
            <p>Werkstraße 1b<br />85445 Oberding</p>
            <p>Email: <a href="mailto:hallo@carinakarmann.de">hallo@carinakarmann.de</a><br />Mobil: <a href="tel:+49 176 34937068" data-v-79d2028b="">+49 176 34937068</a></p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div></div>
          <div>
            
          </div>
        </div>

      </div>
    </section>

    


  </div>
</template>