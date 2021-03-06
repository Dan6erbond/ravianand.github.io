import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    memes: [
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/dxxqrz/we_dont_do_that_here/",
        img: "https://i.redd.it/5r9o8so89dz31.jpg",
        subtitle: `Not on my watch!`,
      },
      {
        url:
          "https://www.reddit.com/r/Tinder/comments/dykgki/we_might_be_in_boys/",
        img: "https://i.redd.it/vynwbbu8bnz31.png",
        title:
          "You should have expected at least ONE dad joke from me today. 😂",
      },
      {
        url:
          "https://www.reddit.com/r/BirdsArentReal/comments/dxwcto/made_these_in_mm_store_in_times_square_gotta/",
        img: "https://i.redd.it/6g5v2kh7pcz31.jpg",
        title: `Sorry to disappoint. 😔`,
      },
      {
        url: "https://www.reddit.com/r/me_irl/comments/dyieeb/me_irl/",
        img: "https://i.redd.it/xmrg8l498mz31.jpg",
        title: `To be fair with all these Indians you've been loving. 😜`,
      },
      {
        url: "https://www.reddit.com/r/me_irl/comments/e5l79p/me_irl/",
        img: "https://i.redd.it/l6cbm7idng241.jpg",
        subtitle: `<span class="bg-dark px-2">Honestly, I feel like you'll enjoy the second one more. 🤔</span>`,
      },
      {
        url:
          "https://www.reddit.com/r/facepalm/comments/e0cedl/not_sure_if_this_has_been_posted_before/",
        img: "https://i.redd.it/biz8aaunvc041.jpg",
        title: `No comment. 😶`,
      },
      {
        url:
          "https://www.reddit.com/r/sadcringe/comments/e09ljk/he_was_done_pudding_up_with_her/",
        img: "https://i.redd.it/dhvetdfkrb041.jpg",
        title: `I tira miss you Cate. 💓`,
      },
      {
        url:
          "https://www.reddit.com/r/boottoobig/comments/e0ctsm/ice_is_cold_water_is_wet/",
        img: "https://i.redd.it/hey5homp2d041.jpg",
        title:
          "Baguette coffins shut with Flextape is all we've ever asked for!",
      },
      {
        url:
          "https://www.reddit.com/r/PewdiepieSubmissions/comments/e0hwq2/slaps_glass/",
        img: "https://i.redd.it/iknsc2j4vf041.jpg",
        subtitle: `I've always told you Elon Musk is an idiot, Cate.`,
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/e0n61y/recycle_yourself/",
        img: "https://i.redd.it/me11rs6urh041.jpg",
        title: `<span class="bg-dark d-block mt-4">Have you been counting the puns? 😛</span>`,
      },
      {
        url: "https://www.reddit.com/r/me_irl/comments/e1hseb/me_irl/",
        img: "https://i.redd.it/4s3kunecsu041.jpg",
        title: `Communism and love are the ultimate birthday present. 🎂`,
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/e30qi6/got_a_whole_lotta_love/",
        img: "https://i.redd.it/e9j62llmkg141.jpg",
        sutitle: `Pretty birdie. 😍`,
      },
      {
        url:
          "https://www.reddit.com/r/blursedimages/comments/e7h47b/blursed_duel/",
        img: "https://i.redd.it/11bjwo7ey8341.jpg",
        title: `BAGUETTE FIGHTS! 🥖`,
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/e98tud/it_starts_fading_away/",
        img: "https://i.redd.it/xh4icgij01441.jpg",
        title: `You always manage to put a smile on my face. 😊`,
      },
      {
        url:
          "https://www.reddit.com/r/blursedimages/comments/gn4hqc/blursed_birthday/",
        img: "https://i.redd.it/ckk1eklyiuz41.jpg",
        title: `Again, bears, beets, FLEXPASTE!`,
      },
      {
        url:
          "https://www.reddit.com/r/blursedimages/comments/gp7vgu/blursed_anatomy/",
        img: "https://i.redd.it/c3y7tblnkj051.jpg",
        subtitle: `This would have made our fanny pack meeting idea real odd. 😳`,
      },
      {
        url:
          "https://www.reddit.com/r/birdswitharms/comments/fj72jz/remember_to_wash_your_hands_kiddos/",
        img: "https://i.redd.it/g9bs68vq2wm41.jpg",
        subtitle: `<span class="text-dark">Now this is one responsible <b>majestic</b> bird. 😜`,
      },
      {
        url:
          "https://www.reddit.com/r/ToiletPaperUSA/comments/ebhah1/sorry_for_quality_but_i_did_this_on_a_phone/",
        img: "https://i.redd.it/b83c1p6pu0541.jpg",
        title: `In case laughing at conservatives hasn't gotten old yet...`,
      },
      {
        url:
          "https://www.reddit.com/r/ShittyLifeProTips/comments/ebddym/slpt_for_tall_people/",
        img: "https://i.redd.it/idah3w971z441.jpg",
        subtitle: `<span class="bg-dark px-2">Thank god we won't have to do this with each other. 😂</span>`,
      },
      {
        url:
          "https://www.reddit.com/r/clevercomebacks/comments/eauad1/i_also_want_to_exchange/",
        img: "https://i.redd.it/tiirkv403q441.jpg",
        subtitle: `<span class="bg-dark px-1">See Cate? You can toootally give me your yacht... 😜</span>`,
      },
      {
        url: "https://www.reddit.com/r/me_irl/comments/g2wisg/me_irl/",
        img: "https://i.redd.it/aayup9hgobt41.jpg",
        subtitle: `Annoying Cate with puns on her birthday, oh yeahhh... 😎`,
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/ebrja2/boop_boop_dig_dig/",
        img: "https://i.redd.it/v3i8czttq4541.jpg",
        subtitle: `<span class="text-dark">I'll always be here for you. 💓</span>`,
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/ecfcj2/ill_stand_by_you/",
        img: "https://i.redd.it/64cel9aqbf541.jpg",
        subtitle: `In case I haven't said it enough.`,
      },
      {
        url: "https://www.reddit.com/r/funny/comments/ez88da/fine_legs/",
        img: "https://i.redd.it/7ujydvemc3f41.png",
        subtitle: `<span class="bg-dark px-1">Not sure if this is "ok" in 2020 anymore to be honest. 🤔</span>`,
      },
      {
        url: "https://www.reddit.com/r/me_irl/comments/g6kvqc/me_irl/",
        img: "https://i.redd.it/ekik0ilvxju41.jpg",
        title: `No, I won't stop. 😜`,
      },
      {
        url:
          "https://www.reddit.com/r/dankmemes/comments/d1ehrx/not_mine_but_i_had_to_post_it/",
        img: "https://i.redd.it/gg5zythruel31.jpg",
        subtitle: `<span class="bg-dark px-1">I told you one day I'd use this pick-up line on you. 😂</span>`,
      },
      {
        url:
          "https://www.reddit.com/r/Tinder/comments/8aaf4y/ha_ha_depression_pickup_lines/",
        img: "https://i.redd.it/zy7wt5p04bq01.jpg",
        subtitle: `<span class="bg-dark px-1">Not nearly as good as the original. 😘</span>`,
      },
      {
        url:
          "https://www.reddit.com/r/blursedimages/comments/ex1kmh/blursed_leg/",
        img: "https://i.redd.it/3ph36ru729e41.jpg",
        subtitle: `Made for leg connoisseurs such as us. 😌`,
      },
      {
        url: "https://www.reddit.com/r/puns/comments/g8hhpi/why_you_lie/",
        img: "https://i.redd.it/t8hwlhb8x6v41.jpg",
        title: `Have I made you groan yet? 😂`,
      },
      {
        url: "https://www.reddit.com/r/HolUp/comments/gdc7rr/i_love_nature/",
        img: "https://i.redd.it/zmbvzx7c9rw41.jpg",
        title: `<span class="bg-light px-2 text-dark"><span class="font-weight-bold">ALMOST</span> as good as bird-watching tbh. 🔭</span>`,
      },
      {
        url:
          "https://www.reddit.com/r/ShittyLifeProTips/comments/ggdkrc/lpt_proper_first_aid_procedure/",
        img: "https://i.redd.it/sgt69n7b1qx41.jpg",
        title: `<span class="text-dark bg-light px-2">Amputation has always been a solution. 🤷🏽‍♂️</span>`,
      },
      {
        url:
          "https://www.reddit.com/r/notliketheothergirls/comments/eylfby/this_annoyed_me/",
        img: "https://i.redd.it/yv6ithfjjue41.png",
        subtitle: `<span class="text-dark">Guess I'm just wired to think about you when I read chicken nuggets now. 🤷‍♂️</span>`,
      },
      {
        url:
          "https://www.reddit.com/r/cursedcomments/comments/erzfdo/cursed_toaster/",
        img: "https://i.redd.it/7dnwqejil6c41.jpg",
        title: `<span class="bg-dark px-1">Panel 2 of posting toaster jokes. 😛</span>`,
      },
      {
        url:
          "https://www.reddit.com/r/HistoryMemes/comments/g1jc5d/georgegeorge/",
        img: "https://i.redd.it/9cl4iy2c8ws41.jpg",
        subtitle: `<span class="text-left d-block" style="width: 50%">Y'all American'ts even come to Europe anymore smh.</span>`,
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/epj8bb/honks_wholesomely/",
        img: "https://i.redd.it/gxq1p9ru55b41.png",
        title: `Peaceful spin on your favorite birdie! 😊`,
      },
      {
        url: "https://www.reddit.com/r/me_irl/comments/ggwv5n/me_irl/",
        img: "https://i.redd.it/vuzqh2d81wx41.jpg",
        title: `<span class="text-dark bg-light p-2">...</span>`,
      },
      {
        url:
          "https://www.reddit.com/r/starterpacks/comments/fxmjtt/love_or_hate_starter_pack/",
        img: "https://i.redd.it/2ynf2xbt9qr41.jpg",
        subtitle: `<span class="bg-dark px-2">Honestly I just put this here because of the seafood. 🤷‍♂️</span>`,
      },
      {
        url:
          "https://www.reddit.com/r/Tinder/comments/ggxq8l/so_im_bad_at_roleplaying_i_guess/",
        img: "https://i.redd.it/k0cuvpboewx41.jpg",
        subtitle: `<span class="bg-dark px-2">I know you love the <a href="https://reddit.com/r/Tinder" target="_blank">/r/Tinder</a> posts. SEXY FIREBALL!!! 🔥</span>`,
      },
      {
        url:
          "https://www.reddit.com/r/Tinder/comments/e1o2w4/bio_said_she_was_looking_for_a_seth_rogan_to_marry/",
        img: "https://i.redd.it/3s8i0puvww041.jpg",
        ignore: true,
      },
      {
        url:
          "https://www.reddit.com/r/KamikazeByWords/comments/e2ej12/when_you_find_the_right_one_you_know/",
        img: "https://i.redd.it/tyxfgtq2x4141.png",
        ignore: true,
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/e60d67/thank_you_joker/",
        img: "https://i.redd.it/p4uqsushrm241.jpg",
        ignore: true,
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/e1ocyt/how_i_feel_about_this_community_oc/",
        img: "https://i.redd.it/3xr2j1oetw041.jpg",
        subtitle: `<span class="text-dark">*panties drop*</span>`,
      },
      {
        title: `I owe you some OC. 😊`,
        img: require("../assets/img/photo_2020-11-02_23-54-11.jpg"),
      },
      {
        url:
          "https://www.reddit.com/r/FoodPorn/comments/g3nuj0/homemade_lobstahhh_rolls/",
        img: "https://i.redd.it/53lw0sti0lt41.jpg",
        subtitle: `Not really a meme, but I thought you'd love this picture.`,
        displayLink: true,
      },
      {
        title: `Happy Birthday dear. 😊🎂`,
        img: require("../assets/img/photo_2020-11-02_00-00-11.jpg"),
      },
      {
        url:
          "https://www.reddit.com/r/wholesomememes/comments/dv40yz/lets_teach_the_youngins/",
        img: "https://i.redd.it/78ul9vera6y31.jpg",
        displayLink: true,
        subtitle: `<span class="bg-dark px-2">I love you Cate, and I hope you have an amazing birthday. 💓</span>`,
      },
    ],
    randomMemeIndex: null,
  },
  mutations: {
    setRandomMemeIndex(state, { index }) {
      state.randomMemeIndex = index;
    },
  },
  actions: {},
  modules: {},
});
