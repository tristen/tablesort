tablesort
---

A small & simple sorting component for tables written in JavaScript

[![Build Status](https://app.travis-ci.com/tripu/tablesort.svg?branch=master)](https://app.travis-ci.com/tripu/tablesort)
[![npm version](http://img.shields.io/npm/v/tablesort.svg)](https://npmjs.org/package/tablesort)

### Quick start

``` html
<script src='tablesort.min.js'></script>

<!-- Include sort types you need -->
<script src='tablesort.number.js'></script>
<script src='tablesort.date.js'></script>

<script>
  new Tablesort(document.getElementById('table-id'));
</script>
```

**[See usage and demos for more](http://tristen.ca/tablesort/demo/)**

---

### Browser Support

| <img src="http://i.imgur.com/dJC1GUv.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/8h3iz5H.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/iQV4nmJ.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/j3tgNKJ.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|
| 8+ ✔ | 3.6+ ✔ | 10+ ✔ | 11.50+ ✔ | 5.1+ ✔ |

### Node/Browserify

``` js
import tablesort from 'tablesort';

tablesort(el, options);
```

### Default CSS
Add the styling from [tablesort.css](tablesort.css) file to your CSS or roll with your own.


### Extending Tablesort

If you require a sort operation that does not exist
in the [sorts](https://github.com/tristen/tablesort/tree/gh-pages/src/sorts/)
directory, you can add your own.

``` js
Tablesort.extend('name', item => {

  // Regular expression to test against.
  // `item` is a table value to evaluate.
  return /foo/.test(item);
}, (a, b) => {

  // Custom sort functionality goes here.
  // e.g var n = (a > b) ? -1 : 1;
  return n;
});
```

If you've made an extend function that others would benefit from pull requests
are gladly accepted!

### Contributing
Dependencies: Node.js 22.

Tablesort relies on [Grunt](http://gruntjs.com) as its build tool. Simply run
`npm run build` to package code from any contributions you make to `src/tablesort.js`
before submitting pull requests.

Tests are run via:

```sh
npm test
```

Running the demo locally

```sh
jekyll serve
```

Then open http://localhost:4000/demo/ (or whatever port it uses).

### Licence

MIT

### Bugs?

[Create an issue](https://github.com/tristen/tablesort/issues)


## 🌐 Web Resources & Interactive Index
- [THE SHAPE](https://thelearnquesters.pages.dev/the-shape.html)
- [MAGIC PIANO MUSIC](https://studyquests.github.io/magic-piano-music.html)
- [ANTISTRESS SIMULATOR OF SEQUINS DIY](https://thelearnquester.web.app/antistress-simulator-of-sequins-diy.html)
- [CATEGORY INCREMENTAL](https://studyplayings.pages.dev/category-incremental.html)
- [PRACTICE ON ME](https://studyquests.github.io/practice-on-me.html)
- [CRAZYSTEVEIO](https://quizverses.github.io/crazysteveio.html)
- [CATEGORY CAR 2](https://quizverses.pages.dev/category-car-2.html)
- [CATEGORY INTERSTELLARNETWORK](https://learnquester.github.io/category-interstellarnetwork.html)
- [PIRATES MAHJONG](https://studyplaying.github.io/pirates-mahjong.html)
- [STEAL BRAINROT ORIGINAL 3D](https://quizverses.github.io/steal-brainrot-original-3d.html)
- [BLOCK MINE FUSE TNT](https://quizverses.github.io/block-mine-fuse-tnt.html)
- [CONTACT](https://quizverses.github.io/contact.html)
- [SWORD PLAY NINJA SLICE RUNNER](https://studyquesthub.web.app/sword-play-ninja-slice-runner.html)
- [FLICK SHOT SOCCER](https://studyplaying.github.io/flick-shot-soccer.html)
- [ROYAL JEWELS MATCH](https://studyquesthub.web.app/royal-jewels-match.html)
- [MAGIC FOREST MERGE THE SECRETS](https://quizverses.github.io/magic-forest-merge-the-secrets.html)
- [TRICKY LIFE](https://quizverses.github.io/tricky-life.html)
- [CATEGORY UNBLOCKER](https://learnquester.github.io/category-unblocker.html)
- [GT CHAMPIONSHIP ARCADE](https://enskillcrafts.pages.dev/gt-championship-arcade.html)
- [ZOO RESTAURANT](https://quizverses.github.io/zoo-restaurant.html)
- [LABO BRICK TRAIN GAME FOR KIDS](https://studyplaying.github.io/labo-brick-train-game-for-kids.html)
- [TILES MATCHING](https://learnquester.github.io/tiles-matching.html)
- [PIXEL SHOOT](https://studyplaying.github.io/pixel-shoot.html)
- [MAJESTIC DRAGONS MERGE](https://studyquesthub.web.app/majestic-dragons-merge.html)
- [CATEGORY RACING DRIVING](https://studyplaying.github.io/category-racing-driving.html)
- [BUBBLE SHOOTER PANDA BLAST](https://studyplaying.github.io/bubble-shooter-panda-blast.html)
- [SNOW ROAD PUZZLE](https://studyplayings.web.app/snow-road-puzzle.html)
- [K POP HUNTERS VALENTINE STYLE](https://studyplaying.github.io/k-pop-hunters-valentine-style.html)
- [ELLIE CHINESE NEW YEAR CELEBRATION](https://quizverses.github.io/ellie-chinese-new-year-celebration.html)
- [CATEGORY CASUAL 8](https://studyplayings.pages.dev/category-casual-8.html)
- [HAPPY ASMR CARE](https://quizverses.github.io/happy-asmr-care.html)
- [MATH BLOCK](https://studyquests.github.io/math-block.html)
- [CATEGORY FIGHTING124](https://learnquester.github.io/category-fighting124.html)
- [NOOB JAILBREAK 2](https://studyplayings.web.app/noob-jailbreak-2.html)
- [COLOR SAND PUZZLE](https://studyplaying.github.io/color-sand-puzzle.html)
- [STREET RACING MOTO DRIFT](https://studyquesthub.web.app/street-racing-moto-drift.html)
- [US ARMY CAR GAMES TRUCK DRIVING](https://quizverses.github.io/us-army-car-games-truck-driving.html)
- [CATEGORY CONTROLLER59](https://quizverses-9d2f2.web.app/category-controller59.html)
- [CATEGORY MATCH 3117](https://learnquester.github.io/category-match-3117.html)
- [CHESS ONLINE](https://studyquesthub.web.app/chess-online.html)
- [CATEGORY STORY45](https://studyplayings.pages.dev/category-story45.html)
- [SORTSTORE](https://studyquests.github.io/sortstore.html)
- [MONSTER DUELIST](https://quizverses.github.io/monster-duelist.html)
- [CATEGORY CASUAL 5](https://studyquests.github.io/category-casual-5.html)
- [STICK FIGHT THE CHAOS](https://studyplayings.web.app/stick-fight-the-chaos.html)
- [CATEGORY CARE](https://quizverses-9d2f2.web.app/category-care.html)
- [VEX 9](https://studyplayings.web.app/vex-9.html)
- [MINETAP](https://quizverses.github.io/minetap.html)
- [SIGMA BOY MUSICAL CLICKER](https://studyplayings.web.app/sigma-boy-musical-clicker.html)
- [AXE THROW](https://quizverses.github.io/axe-throw.html)
- [PRINCESS DRESS UP RUN](https://thelearnquester.web.app/princess-dress-up-run.html)
- [ZOO RESTAURANT](https://learnquesters.pages.dev/zoo-restaurant.html)
- [CAKE SORT](https://studyquests.github.io/cake-sort.html)
- [CATEGORY THINKY](https://quizverses-9d2f2.web.app/category-thinky.html)
- [67 CLICKER](https://studyquests.github.io/67-clicker.html)
- [THATS NOT MY NEIGHBOR](https://quizverses.github.io/thats-not-my-neighbor.html)
- [CATEGORY DRESS UP 2](https://studyquests.github.io/category-dress-up-2.html)
- [MAGIC KINGDOM HEX MATCH](https://studyquests.github.io/magic-kingdom-hex-match.html)
- [ARROW COUNT MASTER](https://learnquester.github.io/arrow-count-master.html)
- [INDEX28](https://studyquests.github.io/index28.html)
- [K WEDDING DREAM](https://learnquesters.pages.dev/k-wedding-dream.html)
- [DIRTY MONEY THE RICH GET RICH](https://quizverses-9d2f2.web.app/dirty-money-the-rich-get-rich.html)
- [FAR ORION NEW WORLDS](https://learnquester.pages.dev/far-orion-new-worlds.html)
- [BIG BLOCK BLAST](https://studyplayings.web.app/big-block-blast.html)
- [WINTER SOLITAIRE TRIPEAKS](https://quizverses.github.io/winter-solitaire-tripeaks.html)
- [BEAUTY PUZZLE](https://quizverses.pages.dev/beauty-puzzle.html)
- [BALLOON POP FRENZY](https://studyplayings.web.app/balloon-pop-frenzy.html)
- [FOXY ECO SORT](https://studyplaying.github.io/foxy-eco-sort.html)
- [HOLE BATTLEIO](https://studyplayings.pages.dev/hole-battleio.html)
- [CATEGORY PLATFORM260](https://quizverses-9d2f2.web.app/category-platform260.html)
- [SANTA VS SKRITCH](https://learnquester.github.io/santa-vs-skritch.html)
- [MOTO CABBIE SIMULATOR](https://studyquests.github.io/moto-cabbie-simulator.html)
- [SOLAR SMASH](https://studyplayings.pages.dev/solar-smash.html)
- [DEFORM IT](https://learnquester.github.io/deform-it.html)
- [CATEGORY CUTE62](https://studyquests.github.io/category-cute62.html)
- [INDEX15](https://learnquesters.pages.dev/index15.html)
- [BRAINROT CLICKER](https://studyplayings.pages.dev/brainrot-clicker.html)
- [LIGHT LINE](https://quizverses.github.io/light-line.html)
- [HIGH HEELS COLLECT RUN](https://studyquests.github.io/high-heels-collect-run.html)
- [HAMSTER COMBO IDLE](https://learnquester.github.io/hamster-combo-idle.html)
- [CATEGORY CASUAL 2](https://studyquests.pages.dev/category-casual-2.html)
- [WORD STARS](https://learnquester.github.io/word-stars.html)
- [CATEGORY 3D1 383](https://studyquests.github.io/category-3d1-383.html)
- [COZY GARDEN IDLE](https://studyplayings.web.app/cozy-garden-idle.html)
- [CATEGORY TANK](https://quizverses.github.io/category-tank.html)
- [CATERFALL 2048](https://studyquests.github.io/caterfall-2048.html)
- [PONGOAL](https://learnquester.github.io/pongoal.html)
- [EPIC RACING DESCENT ON CARS](https://learnquester.github.io/epic-racing-descent-on-cars.html)
- [PIZZA PUZZLE](https://learnquester.pages.dev/pizza-puzzle.html)
- [FOREST MATCH 4](https://studyplaying.github.io/forest-match-4.html)
- [INDEX16](https://learnquesters.pages.dev/index16.html)
- [GEOMETRY VIBES X ARROW](https://learnquester.pages.dev/geometry-vibes-x-arrow.html)
- [LITTLE ALCHEMY](https://quizverses-9d2f2.web.app/little-alchemy.html)
- [ITALIAN BRAINROT QUIZ](https://studyplaying.github.io/italian-brainrot-quiz.html)
- [GTA GRAND VEGAS CRIME](https://learnquester.pages.dev/gta-grand-vegas-crime.html)
- [INDEX9](https://quizverses-9d2f2.web.app/index9.html)
- [HIDE ME](https://studyplayings.web.app/hide-me.html)
- [IDLE LEGEND](https://quizverses.pages.dev/idle-legend.html)
- [ISOMETRIC ESCAPE](https://studyquests.github.io/isometric-escape.html)
- [SUSHI PUZZLE](https://quizverses.pages.dev/sushi-puzzle.html)
- [SUPER BRAIN](https://quizverses.pages.dev/super-brain.html)
- [INDEX14](https://studyquests.github.io/index14.html)
- [ZOMBIE EEASTER BUNNIES](https://studyplayings.web.app/zombie-eeaster-bunnies.html)
- [CARD MASTER](https://learnquester.github.io/card-master.html)
- [SLIPPERY DRIFT RACING](https://studyplayings.web.app/slippery-drift-racing.html)
- [HIDDEN PAINT 3D](https://quizverses-9d2f2.web.app/hidden-paint-3d.html)
- [COOKING RESTAURANT KITCHEN](https://studyquests.github.io/cooking-restaurant-kitchen.html)
- [CATEGORY UNBLOCKEDGAMES](https://studyquests.github.io/category-unblockedgames.html)
- [SAFARI STORY MAHJONG](https://studyplaying.github.io/safari-story-mahjong.html)
- [HEXA STACK CHRISTMAS](https://studyplaying.github.io/hexa-stack-christmas.html)
- [CAR CARE REPAIR DUDU MECHANIC](https://studyplaying.github.io/car-care-repair-dudu-mechanic.html)
- [STICKMAN DUO ESCAPE THE TOMB](https://studyquests.pages.dev/stickman-duo-escape-the-tomb.html)
- [CAT LIFE SIMULATOR](https://studyplaying.github.io/cat-life-simulator.html)
- [BATTLE ARENA](https://learnquester.pages.dev/battle-arena.html)
- [BULLET HEROES](https://quizverses.pages.dev/bullet-heroes.html)
- [ELEMENTAL DRESSUP MAGIC](https://learnquester.pages.dev/elemental-dressup-magic.html)
- [CAPYBARA SUIKA](https://quizverses-9d2f2.web.app/capybara-suika.html)
- [THE SORTING MART](https://studyplayings.pages.dev/the-sorting-mart.html)
- [GRADUATION MAKEUP TRENDS](https://quizverses-9d2f2.web.app/graduation-makeup-trends.html)
- [MOW IT](https://learnquester.pages.dev/mow-it.html)
- [KIRKA IO](https://studyquests.github.io/kirka-io.html)
- [HOMO EVOLUTION](https://learnquester.pages.dev/homo-evolution.html)
- [CATEGORY INTERSTELLAR](https://studyplayings.pages.dev/category-interstellar.html)
- [CATEGORY BUBBLE SHOOTER](https://studyplayings.pages.dev/category-bubble-shooter.html)
- [CATEGORY CASUAL 4](https://studyquests.github.io/category-casual-4.html)
- [FISH RAIN 2](https://quizverses-9d2f2.web.app/fish-rain-2.html)
- [COLOR RINGS BLOCK PUZZLE](https://learnquester.github.io/color-rings-block-puzzle.html)
- [EPIC RACING DESCENT ON CARS](https://quizverses.github.io/epic-racing-descent-on-cars.html)
- [NOOB IN GEOMETRY DASH](https://learnquester.pages.dev/noob-in-geometry-dash.html)
- [RAGDOLL BOB PUZZLE](https://studyplayings.pages.dev/ragdoll-bob-puzzle.html)
