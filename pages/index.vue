<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  ogImage: config.public.siteUrl + '/og-image.jpg'
})

const { gsap, ScrollTrigger } = useGsap();

const main = ref();
const ctx = ref();

onMounted(() => {
  ctx.value = gsap.context(() => {

    // Paths Animation
    const paths = document.querySelectorAll('.anim-path');
    paths.forEach((path) => {
      const q = gsap.utils.selector(path);
      gsap.from(q('.anim-path-element'), {
        opacity: 0,
        y: 10,
        stagger: 0.1,
        scrollTrigger: {
          trigger: path,
          start: 'bottom bottom',
          end: 'top 20%',
        },
      });
    });

    // Cards Animation
    const courses = document.querySelectorAll('.anim-courses');
    courses.forEach((course) => {
      const q = gsap.utils.selector(course);
      gsap.from(q('.anim-courses-element'), {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        scrollTrigger: {
          trigger: course,
          // start: 'bottom bottom',
          end: 'top 20%',
          // scrub: 1,
          // markers: true,
        },
      });
    });

    // Fade Left Stag Animation
    const fadeLeftStag = document.querySelectorAll('.anim-fade-left-stag');
    fadeLeftStag.forEach((element) => {
      const q = gsap.utils.selector(element);
      gsap.from(q('.anim-fade-left-stag-element'), {
        opacity: 0,
        x: 30,
        stagger: 0.5,
        scrollTrigger: {
          trigger: element,
          start: '20% bottom',
          // end: 'top 20%',
          // scrub: 1,
          // markers: true,
        },
      });
    });

    // Fade Left Animation
    const fadeLeft = document.querySelectorAll('.anim-fade-left');
    fadeLeft.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        x: 30,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: '20% bottom',
          // end: 'top 20%',
          // scrub: 1,
          // markers: true,
        },
      });
    });

    // Fade Left Animation
    const fadeRight = document.querySelectorAll('.anim-fade-right');
    fadeRight.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        x: -30,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: '20% bottom',
          // end: 'top 20%',
          // scrub: 1,
          // markers: true,
        },
      });
    });


  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.value.revert(); // <- Easy Cleanup!
});


const courses = ref([
  {
    title: 'Coaching',
    image: '',
    list: [
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
      }
    ]
  },
  {
    title: 'Ernährung & Fitness',
    image: '',
    list: [
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
    ]
  }
])


</script>

<template>
  <div>
    <header class="hero pt-32 md:pt-40 lg:pt-32 xl:pt-40 pb-96 lg:pb-20 xl:pb-48 relative bg-gradient-to-r from-secondary-200 to-secondary-100">
      <div class="hero-background absolute top-0 w-full h-full text-white">
        <!-- <NuxtPicture src="/carina-karmann.png" sizes="sm:640px md:970px" alt="Carina Karmann" class="absolute right-0 bottom-0"  /> -->
        <NuxtImg src="/bg.jpg" alt="background-pattern" class="absolute inset-0 w-full h-full object-cover object-center"  />

        <div class="absolute right-0 bottom-0 md:max-w-[60%] anim-fade-left-stag">
          <SvgBgShape class="absolute w-10/12 h-full right-[5%] top-0 opacity-50 anim-fade-left-stag-element" />
          <NuxtPicture src="/carina-karmann.png" sizes="sm:640px md:970px" alt="Carina Karmann" class="relative anim-fade-left-stag-element"  />
        </div>
      </div>
      
      <div class="container relative z-1 max-w-screen-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="prose prose max-w-2xl text-white">
            <p>
              <span>Fitness // Ernährung // Gesundheit</span>
            </p>
            <h1 class="text-primary mb-8">Ich bringe dich in deine <span class="text-secondary relative before:absolute before:h-[1px] before:w-full before:bg-secondary before:bottom-0">Kraft</span></h1>

            <p>Schluss mit einem zwickendem Körper, Energielosigkeit und ewigen Diäten! Ich zeig dir, wie du dich endlich dauerhaft in deinem Körper wohlfühlst!</p>
            <p>Lerne dich gesund zu bewegen, intuitiv zu essen und stressfrei zu leben. Fit und gesund sein darf Spaß machen, Essen auch!</p>
            <p class="mt-14 not-prose">
              <ElementButton link="#kontakt">Termin vereinbaren</ElementButton>
            </p>
          </div>

          <div>
            
          </div>
        </div>
        
      </div>
    </header>

    <section class="pt-8">
      <div class="container prose max-w-screen-2xl relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-24">
          
          <div class="order-last md:order-first flex flex-col relative not-prose min-h-[25rem]">
            <ElementPath :count="8" class="hidden md:block absolute left-24 z-10 -top-20 xl:-top-40" />
            <div class="relative overflow-hidden flex-1 flex flex-col justify-end px-8 max-w-md lg:max-h-[500px] anim-fade-right">
              <NuxtImg src="/carina-hi.jpg" class="absolute inset-0 object-cover" />
              <NuxtImg src="/mask.png" class="absolute inset-0 object-fill w-full h-full mix-blend-screen" />
            </div>
            
          </div>
          <div class="xl:col-span-2 relative">
            <ElementPath :count="8" class="hidden md:block rotate-90 origin-center absolute -left-12 z-10 -top-8" />
            <div class="md:pt-28">
              <h2 class="relative mt-1 font-display text-3xl mb-8 text-secondary">Hi, ich bin Carina! </h2>
              <p>als Expertin für Körperbewusstsein unterstützte ich dich dabei, voller Energie und Lebenskraft durch deinen Alltag zu gehen. Ich zeige dir, wie du im Einklang mit deinem Körper fit wirst und Frieden mit dem Essen schließt.</p>
              <p>Das Leben und der eigene jahrelanger Kampf haben mir eindeutig gezeigt: um sich gesund und gut im Körper zu fühlen ist mehr notwendig, als diszipliniert dem richtigen Trainings- und Ernährungsplan zu folgen.</p>
              <p>Auch als Personaltrainerin und Coachin erlebe ich, dass es mehr die Herausforderungen hinter diesen Plänen sind. Beim Lösen deiner Handbremse stehe ich dir mit Herzblut, all meiner eigenen Erfahrung, dem Wissen als Personaltrainerin und dem Knowhow als Coach bei. </p>
            </div>
            
          </div>
          
        </div>
      <!-- </div>
    </section>

    <section>
      <div class="container prose max-w-screen-2xl"> -->
        <div class="relative">
          
          <div class="text-center mt-24">
            <h2 class="mt-1 mb-4 text-secondary relative inline-block">
              <ElementPathAngle class="absolute z-10 -left-48 -top-24" />
              Mein Angebot - Was brauchst du?
            </h2>
            <p>Buche dein kostenfreies Erstgespräch und wir finden den idealen Weg für dich!</p>
          </div>

          <div v-for="(cat, catindex) in courses" :key="'cat-'+ catindex" class="anim-courses mt-12 relative">

            <ElementPath v-if="catindex > 0" :count="8" class="absolute left-36 z-10 top-0 -translate-y-full" />

            <div class="xl:flex">
              <div class="relative overflow-hidden max-w-xs flex flex-col px-8">
                <div class="flex-none relative">
                  <NuxtImg src="/froehlich.png" class="w-full max-w-full" />
                <!-- <NuxtImg src="/mask.png" class="absolute inset-0 object-fill w-full h-full mix-blend-screen" /> -->
                  <h3 class="absolute bottom-0 left-1/2 -translate-x-1/2 m-0 font-display flex-none text-white inline-block py-2 px-3 before:bg-secondary before:absolute before:inset-0 before:w-full before:h-full">
                    <span class="relative">{{ cat.title }}:</span>
                  </h3>
                </div>
                
              </div>

              <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div v-for="(course, index) in cat.list" class="relative card anim-courses-element bg-secondary-50/75 flex flex-col justify-between p-12 prose-sm">
                  <div class="absolute inset-0 w-full h-full overflow-hidden not-prose">
                    <div class="bg-secondary-50 w-full h-full absolute inset-0"></div>
                    <NuxtImg src="/mask-03.png" class="absolute inset-0 object-fill w-full h-full mix-blend-screen" />
                  </div>
                  <div class="relative">
                    <p class="font-display text-4xl text-secondary mt-0">{{ course.title }}</p>
                    <div>
                      <p v-for="(p, cdindex) in course.description" :key="'p-' + cdindex">{{ p }}</p>
                    </div>
                    <ElementButton :link="course.cta.url">{{ course.cta.text }}</ElementButton>
                    <!-- <NuxtLink :to="course.cta.url" class="btn btn-primary btn-small text-white no-underline">{{ course.cta.text }}</NuxtLink> -->
                  </div>
                  
                  
                </div>
              </div>
                
                
            </div>

            
            
          </div>
        </div>

      </div>
    </section>

    <section class="bg-gray-50/40 relative">
      <ElementPathAngle :count="8" class="absolute z-10 left-2/3 md:left-1/3 top-0 -translate-y-1/2 xl:-translate-y-1/4 -scale-x-75 scale-y-75 xl:-scale-x-100 xl:scale-y-100" />
      <div class="container prose max-w-screen-2xl">

        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 class="text-secondary mt-0">Kennst du das?</h2>
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
            <NuxtImg src="/ausgepowert.png" class="anim-fade-left" />
          </div>
        </div>

        <div class="text-center">
          <h3 class="font-bold text-primary text-center mt-16 relative inline-block">
            <ElementPathAngle class="absolute z-10 -left-48 -top-24" />
            Schnauze voll davon?
          </h3>
        </div>
        
        <p class="text-center">Dann mach Schluss damit und komm zu mir. Lass uns gemeinsam rausfinden, wie wir das gemeinsam ändern.</p>
        <p class="text-center mb-24">
          <ElementButton link="#kontakt">Kostenlose Erstberatung</ElementButton>
          <!-- <NuxtLink class="btn btn-primary text-white no-underline" to="#kontakt">Kostenlose Erstberatung</NuxtLink> -->
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          <div>
            <NuxtImg src="/froehlich.png" class="anim-fade-right" />
          </div>
          <div class="relative">
            <ElementPath :count="6" class="absolute -left-12 z-10 -top-8" />
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
        <div class="text-center mt-12">
          <h2 class="mt-1 mb-8 text-primary text-6xl relative inline-block">
            <ElementPathAngle :count="7" class="absolute z-10 left-64 -top-44 -scale-x-100" />
            Kontakt
          </h2>
          <p>Buche dein kostenfreies Erstgespräch und wir finden den idealen Weg für dich!</p>

          <div class="md:flex md:gap-24 justify-center">
          
            <div class="w-80 flex flex-col relative not-prose min-h-[25rem]">
              <div class="relative overflow-hidden flex-1">
                <NuxtImg src="/carina-karmann-portrait.jpg" class="absolute inset-0 object-cover w-full h-full" />
                <NuxtImg src="/mask.png" class="absolute inset-0 object-fill w-full h-full mix-blend-screen" />
              </div>
              
            </div>
            <div class="relative text-left">
              <ElementPath :count="8" class="hidden md:block rotate-90 origin-center absolute -left-6 scale-75 z-10 top-0" />
              <div class="md:pt-16">
                
                <h3 class="font-display font-bold text-secondary text-4xl">Carina Karmann</h3>
                <p>Werkstraße 1b<br />85445 Oberding</p>
                <p>Email: <a href="mailto:hallo@carinakarmann.de">hallo@carinakarmann.de</a><br />Mobil: <a href="tel:+49 176 34937068">+49 176 34937068</a></p>
              </div>
              
            </div>
            
          </div>
          
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