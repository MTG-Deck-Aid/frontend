import Image from "next/image";
import Link from "next/link";

export default async function UserDecks(){
    /**
     * UserDecks() will contain a collection of card images that can be clicked on the go to a dynamic link
     */
    /**
     * This component mainly needs to be integrated to use deck information instead of card information
     */
    const exampleCards = 
    [
        {"object":"card","id":"a471b306-4941-4e46-a0cb-d92895c16f8a","oracle_id":"00037840-6089-42ec-8c5c-281f9f474504","multiverse_ids":[692174],"mtgo_id":137223,"tcgplayer_id":615195,"cardmarket_id":807933,"name":"Nissa, Worldsoul Speaker","lang":"en","released_at":"2025-02-14","uri":"https://api.scryfall.com/cards/a471b306-4941-4e46-a0cb-d92895c16f8a","scryfall_uri":"https://scryfall.com/card/drc/13/nissa-worldsoul-speaker?utm_source=api","layout":"normal","highres_image":true,"image_status":"highres_scan","image_uris":{"small":"https://cards.scryfall.io/small/front/a/4/a471b306-4941-4e46-a0cb-d92895c16f8a.jpg?1738355341","normal":"https://cards.scryfall.io/normal/front/a/4/a471b306-4941-4e46-a0cb-d92895c16f8a.jpg?1738355341","large":"https://cards.scryfall.io/large/front/a/4/a471b306-4941-4e46-a0cb-d92895c16f8a.jpg?1738355341","png":"https://cards.scryfall.io/png/front/a/4/a471b306-4941-4e46-a0cb-d92895c16f8a.png?1738355341","art_crop":"https://cards.scryfall.io/art_crop/front/a/4/a471b306-4941-4e46-a0cb-d92895c16f8a.jpg?1738355341","border_crop":"https://cards.scryfall.io/border_crop/front/a/4/a471b306-4941-4e46-a0cb-d92895c16f8a.jpg?1738355341"},"mana_cost":"{3}{G}","cmc":4.0,"type_line":"Legendary Creature — Elf Druid","oracle_text":"Landfall — Whenever a land you control enters, you get {E}{E} (two energy counters).\nYou may pay eight {E} rather than pay the mana cost for permanent spells you cast.","power":"3","toughness":"3","colors":["G"],"color_identity":["G"],"keywords":["Landfall"],"all_parts":[{"object":"related_card","id":"9aeb44e0-2257-444a-b805-7e939ca5f6fe","component":"combo_piece","name":"Nissa, Worldsoul Speaker","type_line":"Legendary Creature — Elf Druid","uri":"https://api.scryfall.com/cards/9aeb44e0-2257-444a-b805-7e939ca5f6fe"},{"object":"related_card","id":"6a2c1fa5-deed-48ba-afe4-6c8ea8d9135e","component":"combo_piece","name":"Energy Reserve","type_line":"Card","uri":"https://api.scryfall.com/cards/6a2c1fa5-deed-48ba-afe4-6c8ea8d9135e"}],"legalities":{"standard":"not_legal","future":"not_legal","historic":"not_legal","timeless":"not_legal","gladiator":"not_legal","pioneer":"not_legal","explorer":"not_legal","modern":"not_legal","legacy":"legal","pauper":"not_legal","vintage":"legal","penny":"not_legal","commander":"legal","oathbreaker":"legal","standardbrawl":"not_legal","brawl":"not_legal","alchemy":"not_legal","paupercommander":"not_legal","duel":"legal","oldschool":"not_legal","premodern":"not_legal","predh":"not_legal"},"games":["paper","mtgo"],"reserved":false,"game_changer":false,"foil":false,"nonfoil":true,"finishes":["nonfoil"],"oversized":false,"promo":false,"reprint":false,"variation":false,"set_id":"d33ef7a4-41bb-4f16-bad3-b3ee13c257e6","set":"drc","set_name":"Aetherdrift Commander","set_type":"commander","set_uri":"https://api.scryfall.com/sets/d33ef7a4-41bb-4f16-bad3-b3ee13c257e6","set_search_uri":"https://api.scryfall.com/cards/search?order=set&q=e%3Adrc&unique=prints","scryfall_set_uri":"https://scryfall.com/sets/drc?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/a471b306-4941-4e46-a0cb-d92895c16f8a/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released&q=oracleid%3A00037840-6089-42ec-8c5c-281f9f474504&unique=prints","collector_number":"13","digital":false,"rarity":"rare","watermark":"desparked","flavor_text":"\"Zendikar still seems so far off, but Chandra is my home.\"","card_back_id":"0aeebaf5-8c7d-4636-9e82-8c27447861f7","artist":"Magali Villeneuve","artist_ids":["9e6a55ae-be4d-4c23-a2a5-135737ffd879"],"illustration_id":"7106ab4f-bd3e-4d2a-ba9c-7f223b5a0b7f","border_color":"black","frame":"2015","frame_effects":["legendary"],"security_stamp":"oval","full_art":false,"textless":false,"booster":false,"story_spotlight":false,"edhrec_rank":11256,"preview":{"source":"The Command Zone","source_uri":"https://www.youtube.com/watch?v=km1f1W0Tl6k","previewed_at":"2025-01-23"},"prices":{"usd":"0.65","usd_foil":null,"usd_etched":null,"eur":"0.02","eur_foil":null,"tix":"1.37"},"related_uris":{"gatherer":"https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=692174&printed=false","tcgplayer_infinite_articles":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DNissa%252C%2BWorldsoul%2BSpeaker","tcgplayer_infinite_decks":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DNissa%252C%2BWorldsoul%2BSpeaker","edhrec":"https://edhrec.com/route/?cc=Nissa%2C+Worldsoul+Speaker"},"purchase_uris":{"tcgplayer":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F615195%3Fpage%3D1","cardmarket":"https://www.cardmarket.com/en/Magic/Products/Singles/Commander-Aetherdrift/Nissa-Worldsoul-Speaker?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall","cardhoarder":"https://www.cardhoarder.com/cards/137223?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"}},
        {"object":"card","id":"86bf43b1-8d4e-4759-bb2d-0b2e03ba7012","oracle_id":"0004ebd0-dfd6-4276-b4a6-de0003e94237","multiverse_ids":[15862],"mtgo_id":15870,"mtgo_foil_id":15871,"tcgplayer_id":3094,"cardmarket_id":3081,"name":"Static Orb","lang":"en","released_at":"2001-04-11","uri":"https://api.scryfall.com/cards/86bf43b1-8d4e-4759-bb2d-0b2e03ba7012","scryfall_uri":"https://scryfall.com/card/7ed/319/static-orb?utm_source=api","layout":"normal","highres_image":true,"image_status":"highres_scan","image_uris":{"small":"https://cards.scryfall.io/small/front/8/6/86bf43b1-8d4e-4759-bb2d-0b2e03ba7012.jpg?1562242171","normal":"https://cards.scryfall.io/normal/front/8/6/86bf43b1-8d4e-4759-bb2d-0b2e03ba7012.jpg?1562242171","large":"https://cards.scryfall.io/large/front/8/6/86bf43b1-8d4e-4759-bb2d-0b2e03ba7012.jpg?1562242171","png":"https://cards.scryfall.io/png/front/8/6/86bf43b1-8d4e-4759-bb2d-0b2e03ba7012.png?1562242171","art_crop":"https://cards.scryfall.io/art_crop/front/8/6/86bf43b1-8d4e-4759-bb2d-0b2e03ba7012.jpg?1562242171","border_crop":"https://cards.scryfall.io/border_crop/front/8/6/86bf43b1-8d4e-4759-bb2d-0b2e03ba7012.jpg?1562242171"},"mana_cost":"{3}","cmc":3.0,"type_line":"Artifact","oracle_text":"As long as this artifact is untapped, players can't untap more than two permanents during their untap steps.","colors":[],"color_identity":[],"keywords":[],"legalities":{"standard":"not_legal","future":"not_legal","historic":"not_legal","timeless":"not_legal","gladiator":"not_legal","pioneer":"not_legal","explorer":"not_legal","modern":"not_legal","legacy":"legal","pauper":"not_legal","vintage":"legal","penny":"not_legal","commander":"legal","oathbreaker":"legal","standardbrawl":"not_legal","brawl":"not_legal","alchemy":"not_legal","paupercommander":"not_legal","duel":"legal","oldschool":"not_legal","premodern":"legal","predh":"legal"},"games":["paper","mtgo"],"reserved":false,"game_changer":false,"foil":false,"nonfoil":true,"finishes":["nonfoil"],"oversized":false,"promo":false,"reprint":true,"variation":false,"set_id":"230f38aa-9511-4db8-a3aa-aeddbc3f7bb9","set":"7ed","set_name":"Seventh Edition","set_type":"core","set_uri":"https://api.scryfall.com/sets/230f38aa-9511-4db8-a3aa-aeddbc3f7bb9","set_search_uri":"https://api.scryfall.com/cards/search?order=set&q=e%3A7ed&unique=prints","scryfall_set_uri":"https://scryfall.com/sets/7ed?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/86bf43b1-8d4e-4759-bb2d-0b2e03ba7012/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released&q=oracleid%3A0004ebd0-dfd6-4276-b4a6-de0003e94237&unique=prints","collector_number":"319","digital":false,"rarity":"rare","flavor_text":"The warriors fought against the paralyzing waves until even their thoughts froze in place.","card_back_id":"0aeebaf5-8c7d-4636-9e82-8c27447861f7","artist":"Terese Nielsen","artist_ids":["eb55171c-2342-45f4-a503-2d5a75baf752"],"illustration_id":"6f8b3b2c-252f-4f95-b621-712c82be38b5","border_color":"white","frame":"1997","full_art":false,"textless":false,"booster":true,"story_spotlight":false,"edhrec_rank":4639,"prices":{"usd":"19.22","usd_foil":null,"usd_etched":null,"eur":"7.44","eur_foil":null,"tix":"0.42"},"related_uris":{"gatherer":"https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=15862&printed=false","tcgplayer_infinite_articles":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DStatic%2BOrb","tcgplayer_infinite_decks":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DStatic%2BOrb","edhrec":"https://edhrec.com/route/?cc=Static+Orb"},"purchase_uris":{"tcgplayer":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F3094%3Fpage%3D1","cardmarket":"https://www.cardmarket.com/en/Magic/Products/Singles/Seventh-Edition/Static-Orb?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall","cardhoarder":"https://www.cardhoarder.com/cards/15870?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"}},
        {"object":"card","id":"7050735c-b232-47a6-a342-01795bfd0d46","oracle_id":"0006faf6-7a61-426c-9034-579f2cfcfa83","multiverse_ids":[370780],"mtgo_id":49283,"mtgo_foil_id":49284,"tcgplayer_id":69965,"cardmarket_id":262945,"name":"Sensory Deprivation","lang":"en","released_at":"2013-07-19","uri":"https://api.scryfall.com/cards/7050735c-b232-47a6-a342-01795bfd0d46","scryfall_uri":"https://scryfall.com/card/m14/71/sensory-deprivation?utm_source=api","layout":"normal","highres_image":true,"image_status":"highres_scan","image_uris":{"small":"https://cards.scryfall.io/small/front/7/0/7050735c-b232-47a6-a342-01795bfd0d46.jpg?1562830795","normal":"https://cards.scryfall.io/normal/front/7/0/7050735c-b232-47a6-a342-01795bfd0d46.jpg?1562830795","large":"https://cards.scryfall.io/large/front/7/0/7050735c-b232-47a6-a342-01795bfd0d46.jpg?1562830795","png":"https://cards.scryfall.io/png/front/7/0/7050735c-b232-47a6-a342-01795bfd0d46.png?1562830795","art_crop":"https://cards.scryfall.io/art_crop/front/7/0/7050735c-b232-47a6-a342-01795bfd0d46.jpg?1562830795","border_crop":"https://cards.scryfall.io/border_crop/front/7/0/7050735c-b232-47a6-a342-01795bfd0d46.jpg?1562830795"},"mana_cost":"{U}","cmc":1.0,"type_line":"Enchantment — Aura","oracle_text":"Enchant creature\nEnchanted creature gets -3/-0.","colors":["U"],"color_identity":["U"],"keywords":["Enchant"],"legalities":{"standard":"not_legal","future":"not_legal","historic":"not_legal","timeless":"not_legal","gladiator":"not_legal","pioneer":"legal","explorer":"not_legal","modern":"legal","legacy":"legal","pauper":"legal","vintage":"legal","penny":"legal","commander":"legal","oathbreaker":"legal","standardbrawl":"not_legal","brawl":"not_legal","alchemy":"not_legal","paupercommander":"legal","duel":"legal","oldschool":"not_legal","premodern":"not_legal","predh":"not_legal"},"games":["paper","mtgo"],"reserved":false,"game_changer":false,"foil":true,"nonfoil":true,"finishes":["nonfoil","foil"],"oversized":false,"promo":false,"reprint":true,"variation":false,"set_id":"e03ee1c0-ecd2-4fcc-ac3c-e8fdb103a847","set":"m14","set_name":"Magic 2014","set_type":"core","set_uri":"https://api.scryfall.com/sets/e03ee1c0-ecd2-4fcc-ac3c-e8fdb103a847","set_search_uri":"https://api.scryfall.com/cards/search?order=set&q=e%3Am14&unique=prints","scryfall_set_uri":"https://scryfall.com/sets/m14?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/7050735c-b232-47a6-a342-01795bfd0d46/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released&q=oracleid%3A0006faf6-7a61-426c-9034-579f2cfcfa83&unique=prints","collector_number":"71","digital":false,"rarity":"common","flavor_text":"They call it \"stitcher's anesthesia,\" a spell to deaden the senses while the mad doctors begin their grisly work.","card_back_id":"0aeebaf5-8c7d-4636-9e82-8c27447861f7","artist":"Steven Belledin","artist_ids":["f07d73b9-52a0-4fe5-858b-61f7b42174a5"],"illustration_id":"3c9e9355-4dcd-411c-b85f-47386e94854b","border_color":"black","frame":"2003","full_art":false,"textless":false,"booster":true,"story_spotlight":false,"edhrec_rank":26420,"prices":{"usd":"0.07","usd_foil":null,"usd_etched":null,"eur":"0.04","eur_foil":"0.17","tix":"0.04"},"related_uris":{"gatherer":"https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=370780&printed=false","tcgplayer_infinite_articles":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DSensory%2BDeprivation","tcgplayer_infinite_decks":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DSensory%2BDeprivation","edhrec":"https://edhrec.com/route/?cc=Sensory+Deprivation"},"purchase_uris":{"tcgplayer":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F69965%3Fpage%3D1","cardmarket":"https://www.cardmarket.com/en/Magic/Products/Singles/Magic-2014/Sensory-Deprivation?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall","cardhoarder":"https://www.cardhoarder.com/cards/49283?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"}},
        {"object":"card","id":"e718b21b-46d1-4844-985c-52745657b1ac","oracle_id":"0007c283-5b7a-4c00-9ca1-b455c8dff8c3","multiverse_ids":[470580],"mtgo_id":77122,"tcgplayer_id":196536,"cardmarket_id":391692,"name":"Road of Return","lang":"en","released_at":"2019-08-23","uri":"https://api.scryfall.com/cards/e718b21b-46d1-4844-985c-52745657b1ac","scryfall_uri":"https://scryfall.com/card/c19/34/road-of-return?utm_source=api","layout":"normal","highres_image":true,"image_status":"highres_scan","image_uris":{"small":"https://cards.scryfall.io/small/front/e/7/e718b21b-46d1-4844-985c-52745657b1ac.jpg?1568003608","normal":"https://cards.scryfall.io/normal/front/e/7/e718b21b-46d1-4844-985c-52745657b1ac.jpg?1568003608","large":"https://cards.scryfall.io/large/front/e/7/e718b21b-46d1-4844-985c-52745657b1ac.jpg?1568003608","png":"https://cards.scryfall.io/png/front/e/7/e718b21b-46d1-4844-985c-52745657b1ac.png?1568003608","art_crop":"https://cards.scryfall.io/art_crop/front/e/7/e718b21b-46d1-4844-985c-52745657b1ac.jpg?1568003608","border_crop":"https://cards.scryfall.io/border_crop/front/e/7/e718b21b-46d1-4844-985c-52745657b1ac.jpg?1568003608"},"mana_cost":"{G}{G}","cmc":2.0,"type_line":"Sorcery","oracle_text":"Choose one —\n• Return target permanent card from your graveyard to your hand.\n• Put your commander into your hand from the command zone.\nEntwine {2} (Choose both if you pay the entwine cost.)","colors":["G"],"color_identity":["G"],"keywords":["Entwine"],"legalities":{"standard":"not_legal","future":"not_legal","historic":"not_legal","timeless":"not_legal","gladiator":"not_legal","pioneer":"not_legal","explorer":"not_legal","modern":"not_legal","legacy":"legal","pauper":"not_legal","vintage":"legal","penny":"not_legal","commander":"legal","oathbreaker":"legal","standardbrawl":"not_legal","brawl":"not_legal","alchemy":"not_legal","paupercommander":"not_legal","duel":"legal","oldschool":"not_legal","premodern":"not_legal","predh":"not_legal"},"games":["paper","mtgo"],"reserved":false,"game_changer":false,"foil":false,"nonfoil":true,"finishes":["nonfoil"],"oversized":false,"promo":false,"reprint":false,"variation":false,"set_id":"0fa3ccbb-d86d-4a2e-a55e-c4979c4feeb2","set":"c19","set_name":"Commander 2019","set_type":"commander","set_uri":"https://api.scryfall.com/sets/0fa3ccbb-d86d-4a2e-a55e-c4979c4feeb2","set_search_uri":"https://api.scryfall.com/cards/search?order=set&q=e%3Ac19&unique=prints","scryfall_set_uri":"https://scryfall.com/sets/c19?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/e718b21b-46d1-4844-985c-52745657b1ac/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released&q=oracleid%3A0007c283-5b7a-4c00-9ca1-b455c8dff8c3&unique=prints","collector_number":"34","digital":false,"rarity":"rare","card_back_id":"0aeebaf5-8c7d-4636-9e82-8c27447861f7","artist":"Jonas De Ro","artist_ids":["561ebf9e-8d93-4b57-8156-8826d0c19601"],"illustration_id":"279f7cef-a81c-4b43-98a0-937f3c355b5e","border_color":"black","frame":"2015","security_stamp":"oval","full_art":false,"textless":false,"booster":false,"story_spotlight":false,"edhrec_rank":7987,"preview":{"source":"Magicshibby","source_uri":"https://www.youtube.com/watch?v=39MC2wBcf00&t=7m51s","previewed_at":"2019-08-05"},"prices":{"usd":"0.33","usd_foil":null,"usd_etched":null,"eur":"0.31","eur_foil":null,"tix":"1.25"},"related_uris":{"gatherer":"https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=470580&printed=false","tcgplayer_infinite_articles":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DRoad%2Bof%2BReturn","tcgplayer_infinite_decks":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DRoad%2Bof%2BReturn","edhrec":"https://edhrec.com/route/?cc=Road+of+Return"},"purchase_uris":{"tcgplayer":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F196536%3Fpage%3D1","cardmarket":"https://www.cardmarket.com/en/Magic/Products/Singles/Commander-2019/Road-of-Return?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall","cardhoarder":"https://www.cardhoarder.com/cards/77122?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"}},
        {"object":"card","id":"036ef8c9-72ac-46ce-af07-83b79d736538","oracle_id":"000d5588-5a4c-434e-988d-396632ade42c","multiverse_ids":[83282],"mtgo_id":22609,"mtgo_foil_id":22610,"tcgplayer_id":12835,"cardmarket_id":12551,"name":"Storm Crow","lang":"en","released_at":"2005-07-29","uri":"https://api.scryfall.com/cards/036ef8c9-72ac-46ce-af07-83b79d736538","scryfall_uri":"https://scryfall.com/card/9ed/100/storm-crow?utm_source=api","layout":"normal","highres_image":true,"image_status":"highres_scan","image_uris":{"small":"https://cards.scryfall.io/small/front/0/3/036ef8c9-72ac-46ce-af07-83b79d736538.jpg?1562730661","normal":"https://cards.scryfall.io/normal/front/0/3/036ef8c9-72ac-46ce-af07-83b79d736538.jpg?1562730661","large":"https://cards.scryfall.io/large/front/0/3/036ef8c9-72ac-46ce-af07-83b79d736538.jpg?1562730661","png":"https://cards.scryfall.io/png/front/0/3/036ef8c9-72ac-46ce-af07-83b79d736538.png?1562730661","art_crop":"https://cards.scryfall.io/art_crop/front/0/3/036ef8c9-72ac-46ce-af07-83b79d736538.jpg?1562730661","border_crop":"https://cards.scryfall.io/border_crop/front/0/3/036ef8c9-72ac-46ce-af07-83b79d736538.jpg?1562730661"},"mana_cost":"{1}{U}","cmc":2.0,"type_line":"Creature — Bird","oracle_text":"Flying (This creature can't be blocked except by creatures with flying or reach.)","power":"1","toughness":"2","colors":["U"],"color_identity":["U"],"keywords":["Flying"],"legalities":{"standard":"not_legal","future":"not_legal","historic":"not_legal","timeless":"not_legal","gladiator":"not_legal","pioneer":"not_legal","explorer":"not_legal","modern":"legal","legacy":"legal","pauper":"legal","vintage":"legal","penny":"legal","commander":"legal","oathbreaker":"legal","standardbrawl":"not_legal","brawl":"not_legal","alchemy":"not_legal","paupercommander":"legal","duel":"legal","oldschool":"not_legal","premodern":"legal","predh":"legal"},"games":["paper","mtgo"],"reserved":false,"game_changer":false,"foil":false,"nonfoil":true,"finishes":["nonfoil"],"oversized":false,"promo":false,"reprint":true,"variation":false,"set_id":"e70c8572-4732-4e92-a140-b4e3c1c84c93","set":"9ed","set_name":"Ninth Edition","set_type":"core","set_uri":"https://api.scryfall.com/sets/e70c8572-4732-4e92-a140-b4e3c1c84c93","set_search_uri":"https://api.scryfall.com/cards/search?order=set&q=e%3A9ed&unique=prints","scryfall_set_uri":"https://scryfall.com/sets/9ed?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/036ef8c9-72ac-46ce-af07-83b79d736538/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released&q=oracleid%3A000d5588-5a4c-434e-988d-396632ade42c&unique=prints","collector_number":"100","digital":false,"rarity":"common","flavor_text":"Storm crow descending, winter unending. Storm crow departing, summer is starting.","card_back_id":"0aeebaf5-8c7d-4636-9e82-8c27447861f7","artist":"John Matson","artist_ids":["a1685587-4b55-446b-b420-c37b202ed3f1"],"illustration_id":"d01aa92b-0582-4e1e-a7b0-737b2ad4e462","border_color":"white","frame":"2003","full_art":false,"textless":false,"booster":true,"story_spotlight":false,"edhrec_rank":18045,"penny_rank":13060,"prices":{"usd":"0.08","usd_foil":null,"usd_etched":null,"eur":"0.07","eur_foil":null,"tix":"0.04"},"related_uris":{"gatherer":"https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=83282&printed=false","tcgplayer_infinite_articles":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DStorm%2BCrow","tcgplayer_infinite_decks":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DStorm%2BCrow","edhrec":"https://edhrec.com/route/?cc=Storm+Crow"},"purchase_uris":{"tcgplayer":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F12835%3Fpage%3D1","cardmarket":"https://www.cardmarket.com/en/Magic/Products/Singles/Ninth-Edition/Storm-Crow?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall","cardhoarder":"https://www.cardhoarder.com/cards/22609?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"}},
        {"object":"card","id":"6010d06b-33b6-4631-9b3f-192d8c6b96e7","oracle_id":"000d8291-d6a8-436e-9e17-7531333686a8","multiverse_ids":[],"arena_id":91397,"name":"Snarlfang Vermin","lang":"en","released_at":"2024-03-05","uri":"https://api.scryfall.com/cards/6010d06b-33b6-4631-9b3f-192d8c6b96e7","scryfall_uri":"https://scryfall.com/card/ymkm/12/snarlfang-vermin?utm_source=api","layout":"normal","highres_image":true,"image_status":"highres_scan","image_uris":{"small":"https://cards.scryfall.io/small/front/6/0/6010d06b-33b6-4631-9b3f-192d8c6b96e7.jpg?1710340313","normal":"https://cards.scryfall.io/normal/front/6/0/6010d06b-33b6-4631-9b3f-192d8c6b96e7.jpg?1710340313","large":"https://cards.scryfall.io/large/front/6/0/6010d06b-33b6-4631-9b3f-192d8c6b96e7.jpg?1710340313","png":"https://cards.scryfall.io/png/front/6/0/6010d06b-33b6-4631-9b3f-192d8c6b96e7.png?1710340313","art_crop":"https://cards.scryfall.io/art_crop/front/6/0/6010d06b-33b6-4631-9b3f-192d8c6b96e7.jpg?1710340313","border_crop":"https://cards.scryfall.io/border_crop/front/6/0/6010d06b-33b6-4631-9b3f-192d8c6b96e7.jpg?1710340313"},"mana_cost":"{B}","cmc":1.0,"type_line":"Creature — Rat","oracle_text":"Whenever Snarlfang Vermin deals combat damage to a creature, if that creature is still on the battlefield, suspect that creature. It perpetually gains this ability.\nWhenever a suspected creature an opponent controls dies while Snarlfang Vermin is in your graveyard, that opponent loses 1 life.","power":"2","toughness":"1","colors":["B"],"color_identity":["B"],"keywords":[],"legalities":{"standard":"not_legal","future":"not_legal","historic":"legal","timeless":"legal","gladiator":"legal","pioneer":"not_legal","explorer":"not_legal","modern":"not_legal","legacy":"not_legal","pauper":"not_legal","vintage":"not_legal","penny":"not_legal","commander":"not_legal","oathbreaker":"not_legal","standardbrawl":"not_legal","brawl":"legal","alchemy":"legal","paupercommander":"not_legal","duel":"not_legal","oldschool":"not_legal","premodern":"not_legal","predh":"not_legal"},"games":["arena"],"reserved":false,"game_changer":false,"foil":false,"nonfoil":true,"finishes":["nonfoil"],"oversized":false,"promo":false,"reprint":false,"variation":false,"set_id":"3879667a-f0b8-4bc2-8662-7c861e22b4e9","set":"ymkm","set_name":"Alchemy: Murders at Karlov Manor ","set_type":"alchemy","set_uri":"https://api.scryfall.com/sets/3879667a-f0b8-4bc2-8662-7c861e22b4e9","set_search_uri":"https://api.scryfall.com/cards/search?order=set&q=e%3Aymkm&unique=prints","scryfall_set_uri":"https://scryfall.com/sets/ymkm?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/6010d06b-33b6-4631-9b3f-192d8c6b96e7/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released&q=oracleid%3A000d8291-d6a8-436e-9e17-7531333686a8&unique=prints","collector_number":"12","digital":true,"rarity":"uncommon","card_back_id":"0aeebaf5-8c7d-4636-9e82-8c27447861f7","artist":"Ernanda Souza","artist_ids":["e87a8b19-f97f-4df0-9dda-1310ab0257bb"],"illustration_id":"a34dcd37-7f1d-41ef-85a0-dc537c360a4a","border_color":"black","frame":"2015","security_stamp":"arena","full_art":false,"textless":false,"booster":false,"story_spotlight":false,"promo_types":["alchemy"],"prices":{"usd":null,"usd_foil":null,"usd_etched":null,"eur":null,"eur_foil":null,"tix":null},"related_uris":{"tcgplayer_infinite_articles":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DSnarlfang%2BVermin","tcgplayer_infinite_decks":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DSnarlfang%2BVermin","edhrec":"https://edhrec.com/route/?cc=Snarlfang+Vermin"}}
    ];
    const cardWidth = 450;
    const cardHeight = Math.round(0.73 * cardWidth);
    

    return(
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-cols-max gap-2">
        {exampleCards.map((card) => (   
            <div className="flex flex-col justify-between m-2 p-2" key={card.id}>
                <div className="text-l md:text-2xl italic text-wrap">
                        {card.name}
                </div>
                 {/**IMPORTANT: we need to swap all of this card.{var} with deck information. That will include commander image and deck name
                  */}
                <div>
                    <Link href={{
                        pathname: `/view-import-deck/${card.name}`, //this will be the slug to the edit deck page
                        query:  {title:`${card.name}`}, //title: will be the next page's title (need to find solution such that we can update this from edit deck)
                        //possible TODO: denote whether page should start in edit or view mode
                    }}>
                        <div className="inline-block">
                            <Image
                            //This is the image for displaying the deck. Will need to be replaced with deck info
                                alt={card.name}
                                height={cardHeight}
                                width={cardWidth}
                                src={card.image_uris.art_crop}
                                style={{
                                    width:"100%",
                                    height:"auto",
                                }}
                                className= "rounded-xl"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        ))}
      </div>  
    );
}

