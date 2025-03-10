import SuggestionModal from "@/components/suggestionModal";
import { Divider } from "@heroui/react";
import Image from "next/image";


export default async function Page({params}){
    const {slug} = await params;
    const cardsToAdd = 
        [
            {"object":"card","id":"bea12617-ebaa-45f6-a2e8-b71190708129","oracle_id":"00268072-af77-40d2-8d2d-c02426575ee1","multiverse_ids":[],"name":"Phyrexian Broodstar","lang":"en","released_at":"2023-02-17","uri":"https://api.scryfall.com/cards/bea12617-ebaa-45f6-a2e8-b71190708129","scryfall_uri":"https://scryfall.com/card/da1/RU08/phyrexian-broodstar?utm_source=api","layout":"normal","highres_image":true,"image_status":"highres_scan","image_uris":{"small":"https://cards.scryfall.io/small/front/b/e/bea12617-ebaa-45f6-a2e8-b71190708129.jpg?1727365378","normal":"https://cards.scryfall.io/normal/front/b/e/bea12617-ebaa-45f6-a2e8-b71190708129.jpg?1727365378","large":"https://cards.scryfall.io/large/front/b/e/bea12617-ebaa-45f6-a2e8-b71190708129.jpg?1727365378","png":"https://cards.scryfall.io/png/front/b/e/bea12617-ebaa-45f6-a2e8-b71190708129.png?1727365378","art_crop":"https://cards.scryfall.io/art_crop/front/b/e/bea12617-ebaa-45f6-a2e8-b71190708129.jpg?1727365378","border_crop":"https://cards.scryfall.io/border_crop/front/b/e/bea12617-ebaa-45f6-a2e8-b71190708129.jpg?1727365378"},"mana_cost":"{6}{U}{U}","cmc":8.0,"type_line":"Creature — Phyrexian Beast","oracle_text":"Affinity for Phyrexians (This spell costs {1} less to cast for each Phyrexian you control.)\nFlying\nPhyrexian Broodstar's power and toughness are each equal to the number of Phyrexians you control.","power":"*","toughness":"*","colors":["U"],"color_identity":["U"],"keywords":["Flying","Affinity"],"legalities":{"standard":"not_legal","future":"not_legal","historic":"not_legal","timeless":"not_legal","gladiator":"not_legal","pioneer":"not_legal","explorer":"not_legal","modern":"not_legal","legacy":"not_legal","pauper":"not_legal","vintage":"not_legal","penny":"not_legal","commander":"not_legal","oathbreaker":"not_legal","standardbrawl":"not_legal","brawl":"not_legal","alchemy":"not_legal","paupercommander":"not_legal","duel":"not_legal","oldschool":"not_legal","premodern":"not_legal","predh":"not_legal"},"games":["paper"],"reserved":false,"game_changer":false,"foil":false,"nonfoil":true,"finishes":["nonfoil"],"oversized":false,"promo":false,"reprint":false,"variation":false,"set_id":"d2703c4f-66b6-438d-9368-ebb55aa12e78","set":"da1","set_name":"Unknown Event","set_type":"funny","set_uri":"https://api.scryfall.com/sets/d2703c4f-66b6-438d-9368-ebb55aa12e78","set_search_uri":"https://api.scryfall.com/cards/search?order=set&q=e%3Ada1&unique=prints","scryfall_set_uri":"https://scryfall.com/sets/da1?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/bea12617-ebaa-45f6-a2e8-b71190708129/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released&q=oracleid%3A00268072-af77-40d2-8d2d-c02426575ee1&unique=prints","collector_number":"RU08","digital":false,"rarity":"rare","card_back_id":"0aeebaf5-8c7d-4636-9e82-8c27447861f7","artist":"","border_color":"black","frame":"2015","full_art":false,"textless":false,"booster":false,"story_spotlight":false,"promo_types":["playtest"],"prices":{"usd":null,"usd_foil":null,"usd_etched":null,"eur":null,"eur_foil":null,"tix":null},"related_uris":{"tcgplayer_infinite_articles":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DPhyrexian%2BBroodstar","tcgplayer_infinite_decks":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DPhyrexian%2BBroodstar","edhrec":"https://edhrec.com/route/?cc=Phyrexian+Broodstar"},"purchase_uris":{"tcgplayer":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Fmagic%2Fproduct%3FproductLineName%3Dmagic%26q%3DPhyrexian%2BBroodstar%26view%3Dgrid","cardmarket":"https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Phyrexian+Broodstar&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall","cardhoarder":"https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Phyrexian+Broodstar&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"}},
            {"object":"card","id":"8bbdc7c5-71a1-4db8-98b2-8883bf648dca","oracle_id":"00284955-0a1b-4939-9567-a7d34cbcee51","multiverse_ids":[376366],"mtgo_id":50882,"mtgo_foil_id":50883,"tcgplayer_id":72146,"cardmarket_id":264885,"name":"Hua Tuo, Honored Physician","lang":"en","released_at":"2013-11-01","uri":"https://api.scryfall.com/cards/8bbdc7c5-71a1-4db8-98b2-8883bf648dca","scryfall_uri":"https://scryfall.com/card/c13/149/hua-tuo-honored-physician?utm_source=api","layout":"normal","highres_image":true,"image_status":"highres_scan","image_uris":{"small":"https://cards.scryfall.io/small/front/8/b/8bbdc7c5-71a1-4db8-98b2-8883bf648dca.jpg?1562924564","normal":"https://cards.scryfall.io/normal/front/8/b/8bbdc7c5-71a1-4db8-98b2-8883bf648dca.jpg?1562924564","large":"https://cards.scryfall.io/large/front/8/b/8bbdc7c5-71a1-4db8-98b2-8883bf648dca.jpg?1562924564","png":"https://cards.scryfall.io/png/front/8/b/8bbdc7c5-71a1-4db8-98b2-8883bf648dca.png?1562924564","art_crop":"https://cards.scryfall.io/art_crop/front/8/b/8bbdc7c5-71a1-4db8-98b2-8883bf648dca.jpg?1562924564","border_crop":"https://cards.scryfall.io/border_crop/front/8/b/8bbdc7c5-71a1-4db8-98b2-8883bf648dca.jpg?1562924564"},"mana_cost":"{1}{G}{G}","cmc":3.0,"type_line":"Legendary Creature — Human","oracle_text":"{T}: Put target creature card from your graveyard on top of your library. Activate only during your turn, before attackers are declared.","power":"1","toughness":"2","colors":["G"],"color_identity":["G"],"keywords":[],"legalities":{"standard":"not_legal","future":"not_legal","historic":"not_legal","timeless":"not_legal","gladiator":"not_legal","pioneer":"not_legal","explorer":"not_legal","modern":"not_legal","legacy":"legal","pauper":"not_legal","vintage":"legal","penny":"not_legal","commander":"legal","oathbreaker":"legal","standardbrawl":"not_legal","brawl":"not_legal","alchemy":"not_legal","paupercommander":"not_legal","duel":"legal","oldschool":"not_legal","premodern":"not_legal","predh":"legal"},"games":["paper","mtgo"],"reserved":false,"game_changer":false,"foil":false,"nonfoil":true,"finishes":["nonfoil"],"oversized":false,"promo":false,"reprint":true,"variation":false,"set_id":"c62e6d4f-af8c-4f27-9bc8-361291890146","set":"c13","set_name":"Commander 2013","set_type":"commander","set_uri":"https://api.scryfall.com/sets/c62e6d4f-af8c-4f27-9bc8-361291890146","set_search_uri":"https://api.scryfall.com/cards/search?order=set&q=e%3Ac13&unique=prints","scryfall_set_uri":"https://scryfall.com/sets/c13?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/8bbdc7c5-71a1-4db8-98b2-8883bf648dca/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released&q=oracleid%3A00284955-0a1b-4939-9567-a7d34cbcee51&unique=prints","collector_number":"149","digital":false,"rarity":"rare","card_back_id":"0aeebaf5-8c7d-4636-9e82-8c27447861f7","artist":"Gao Jianzhang","artist_ids":["b4438bb0-939d-4842-a012-ad3dd5729082"],"illustration_id":"980e6255-6258-4359-94f4-5ed79fe23cdf","border_color":"black","frame":"2003","full_art":false,"textless":false,"booster":false,"story_spotlight":false,"edhrec_rank":11601,"penny_rank":9805,"prices":{"usd":"0.68","usd_foil":null,"usd_etched":null,"eur":"0.46","eur_foil":null,"tix":"0.03"},"related_uris":{"gatherer":"https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=376366&printed=false","tcgplayer_infinite_articles":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DHua%2BTuo%252C%2BHonored%2BPhysician","tcgplayer_infinite_decks":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DHua%2BTuo%252C%2BHonored%2BPhysician","edhrec":"https://edhrec.com/route/?cc=Hua+Tuo%2C+Honored+Physician"},"purchase_uris":{"tcgplayer":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F72146%3Fpage%3D1","cardmarket":"https://www.cardmarket.com/en/Magic/Products/Singles/Commander-2013/Hua-Tuo-Honored-Physician?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall","cardhoarder":"https://www.cardhoarder.com/cards/50882?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"}},
            {"object":"card","id":"aa686c34-1c11-469f-93c2-f9891aea521f","oracle_id":"002965be-a36f-4a09-9ce0-c6535bca1703","multiverse_ids":[466952],"mtgo_id":73295,"arena_id":69983,"tcgplayer_id":192543,"cardmarket_id":378381,"name":"Veil of Summer","lang":"en","released_at":"2019-07-12","uri":"https://api.scryfall.com/cards/aa686c34-1c11-469f-93c2-f9891aea521f","scryfall_uri":"https://scryfall.com/card/m20/198/veil-of-summer?utm_source=api","layout":"normal","highres_image":true,"image_status":"highres_scan","image_uris":{"small":"https://cards.scryfall.io/small/front/a/a/aa686c34-1c11-469f-93c2-f9891aea521f.jpg?1650599837","normal":"https://cards.scryfall.io/normal/front/a/a/aa686c34-1c11-469f-93c2-f9891aea521f.jpg?1650599837","large":"https://cards.scryfall.io/large/front/a/a/aa686c34-1c11-469f-93c2-f9891aea521f.jpg?1650599837","png":"https://cards.scryfall.io/png/front/a/a/aa686c34-1c11-469f-93c2-f9891aea521f.png?1650599837","art_crop":"https://cards.scryfall.io/art_crop/front/a/a/aa686c34-1c11-469f-93c2-f9891aea521f.jpg?1650599837","border_crop":"https://cards.scryfall.io/border_crop/front/a/a/aa686c34-1c11-469f-93c2-f9891aea521f.jpg?1650599837"},"mana_cost":"{G}","cmc":1.0,"type_line":"Instant","oracle_text":"Draw a card if an opponent has cast a blue or black spell this turn. Spells you control can't be countered this turn. You and permanents you control gain hexproof from blue and from black until end of turn. (You and they can't be the targets of blue or black spells or abilities your opponents control.)","colors":["G"],"color_identity":["G"],"keywords":[],"legalities":{"standard":"not_legal","future":"not_legal","historic":"banned","timeless":"legal","gladiator":"legal","pioneer":"banned","explorer":"banned","modern":"legal","legacy":"legal","pauper":"not_legal","vintage":"legal","penny":"not_legal","commander":"legal","oathbreaker":"legal","standardbrawl":"not_legal","brawl":"legal","alchemy":"not_legal","paupercommander":"not_legal","duel":"legal","oldschool":"not_legal","premodern":"not_legal","predh":"not_legal"},"games":["arena","paper","mtgo"],"reserved":false,"game_changer":false,"foil":true,"nonfoil":true,"finishes":["nonfoil","foil"],"oversized":false,"promo":false,"reprint":false,"variation":false,"set_id":"4a787360-9767-4f44-80b1-2405dc5e39c7","set":"m20","set_name":"Core Set 2020","set_type":"core","set_uri":"https://api.scryfall.com/sets/4a787360-9767-4f44-80b1-2405dc5e39c7","set_search_uri":"https://api.scryfall.com/cards/search?order=set&q=e%3Am20&unique=prints","scryfall_set_uri":"https://scryfall.com/sets/m20?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/aa686c34-1c11-469f-93c2-f9891aea521f/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released&q=oracleid%3A002965be-a36f-4a09-9ce0-c6535bca1703&unique=prints","collector_number":"198","digital":false,"rarity":"uncommon","card_back_id":"0aeebaf5-8c7d-4636-9e82-8c27447861f7","artist":"Lake Hurwitz","artist_ids":["3677c64b-55e6-4a0d-a952-bdbb05531220"],"illustration_id":"ce69fc01-c621-487b-82ff-7571ce8bd4a9","border_color":"black","frame":"2015","full_art":false,"textless":false,"booster":true,"story_spotlight":false,"edhrec_rank":485,"preview":{"source":"Bloody","source_uri":"https://twitter.com/Bloody/status/1140804013992173568","previewed_at":"2019-06-17"},"prices":{"usd":"6.99","usd_foil":"24.64","usd_etched":null,"eur":"5.72","eur_foil":"27.45","tix":"3.95"},"related_uris":{"gatherer":"https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=466952&printed=false","tcgplayer_infinite_articles":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DVeil%2Bof%2BSummer","tcgplayer_infinite_decks":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DVeil%2Bof%2BSummer","edhrec":"https://edhrec.com/route/?cc=Veil+of+Summer"},"purchase_uris":{"tcgplayer":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F192543%3Fpage%3D1","cardmarket":"https://www.cardmarket.com/en/Magic/Products/Singles/Core-2020/Veil-of-Summer?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall","cardhoarder":"https://www.cardhoarder.com/cards/73295?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"}}
        ];
    const cardsToRemove = 
    [
        {"object":"card","id":"ad806d67-4c98-438b-859f-b1358281e09d","oracle_id":"002a9cea-8cf7-48ba-83eb-e1c87a7024e5","multiverse_ids":[430698],"mtgo_id":64502,"mtgo_foil_id":64503,"tcgplayer_id":136687,"cardmarket_id":298808,"name":"Disposal Mummy","lang":"en","released_at":"2017-07-14","uri":"https://api.scryfall.com/cards/ad806d67-4c98-438b-859f-b1358281e09d","scryfall_uri":"https://scryfall.com/card/hou/9/disposal-mummy?utm_source=api","layout":"normal","highres_image":true,"image_status":"highres_scan","image_uris":{"small":"https://cards.scryfall.io/small/front/a/d/ad806d67-4c98-438b-859f-b1358281e09d.jpg?1562810537","normal":"https://cards.scryfall.io/normal/front/a/d/ad806d67-4c98-438b-859f-b1358281e09d.jpg?1562810537","large":"https://cards.scryfall.io/large/front/a/d/ad806d67-4c98-438b-859f-b1358281e09d.jpg?1562810537","png":"https://cards.scryfall.io/png/front/a/d/ad806d67-4c98-438b-859f-b1358281e09d.png?1562810537","art_crop":"https://cards.scryfall.io/art_crop/front/a/d/ad806d67-4c98-438b-859f-b1358281e09d.jpg?1562810537","border_crop":"https://cards.scryfall.io/border_crop/front/a/d/ad806d67-4c98-438b-859f-b1358281e09d.jpg?1562810537"},"mana_cost":"{2}{W}","cmc":3.0,"type_line":"Creature — Zombie Jackal","oracle_text":"When this creature enters, exile target card from an opponent's graveyard.","power":"2","toughness":"3","colors":["W"],"color_identity":["W"],"keywords":[],"legalities":{"standard":"not_legal","future":"not_legal","historic":"legal","timeless":"legal","gladiator":"legal","pioneer":"legal","explorer":"legal","modern":"legal","legacy":"legal","pauper":"legal","vintage":"legal","penny":"not_legal","commander":"legal","oathbreaker":"legal","standardbrawl":"not_legal","brawl":"legal","alchemy":"not_legal","paupercommander":"legal","duel":"legal","oldschool":"not_legal","premodern":"not_legal","predh":"not_legal"},"games":["paper","mtgo"],"reserved":false,"game_changer":false,"foil":true,"nonfoil":true,"finishes":["nonfoil","foil"],"oversized":false,"promo":false,"reprint":false,"variation":false,"set_id":"65ff168b-bb94-47a5-a8f9-4ec6c213e768","set":"hou","set_name":"Hour of Devastation","set_type":"expansion","set_uri":"https://api.scryfall.com/sets/65ff168b-bb94-47a5-a8f9-4ec6c213e768","set_search_uri":"https://api.scryfall.com/cards/search?order=set&q=e%3Ahou&unique=prints","scryfall_set_uri":"https://scryfall.com/sets/hou?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/ad806d67-4c98-438b-859f-b1358281e09d/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released&q=oracleid%3A002a9cea-8cf7-48ba-83eb-e1c87a7024e5&unique=prints","collector_number":"9","digital":false,"rarity":"common","flavor_text":"Without the viziers to oversee their actions, some anointed went to extreme lengths to fulfill their directives.","card_back_id":"0aeebaf5-8c7d-4636-9e82-8c27447861f7","artist":"Gabor Szikszai","artist_ids":["44c3877f-8771-43dc-9e40-f4c765f59d2e"],"illustration_id":"6c0d96c1-9367-4daa-ac47-4662b0118df8","border_color":"black","frame":"2015","full_art":false,"textless":false,"booster":true,"story_spotlight":false,"edhrec_rank":24700,"penny_rank":12687,"prices":{"usd":"0.02","usd_foil":"0.24","usd_etched":null,"eur":"0.04","eur_foil":"0.17","tix":"0.03"},"related_uris":{"gatherer":"https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=430698&printed=false","tcgplayer_infinite_articles":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DDisposal%2BMummy","tcgplayer_infinite_decks":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DDisposal%2BMummy","edhrec":"https://edhrec.com/route/?cc=Disposal+Mummy"},"purchase_uris":{"tcgplayer":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F136687%3Fpage%3D1","cardmarket":"https://www.cardmarket.com/en/Magic/Products/Singles/Hour-of-Devastation/Disposal-Mummy?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall","cardhoarder":"https://www.cardhoarder.com/cards/64502?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"}},
        {"object":"card","id":"0b4cc234-f6b7-4801-a6d0-c98b72f446cf","oracle_id":"002ad5fa-a20c-4d30-beef-401d89868d67","multiverse_ids":[201307],"mtgo_id":33832,"mtgo_foil_id":33833,"name":"Wei Strike Force","lang":"en","released_at":"2009-09-07","uri":"https://api.scryfall.com/cards/0b4cc234-f6b7-4801-a6d0-c98b72f446cf","scryfall_uri":"https://scryfall.com/card/me3/82/wei-strike-force?utm_source=api","layout":"normal","highres_image":true,"image_status":"highres_scan","image_uris":{"small":"https://cards.scryfall.io/small/front/0/b/0b4cc234-f6b7-4801-a6d0-c98b72f446cf.jpg?1562897354","normal":"https://cards.scryfall.io/normal/front/0/b/0b4cc234-f6b7-4801-a6d0-c98b72f446cf.jpg?1562897354","large":"https://cards.scryfall.io/large/front/0/b/0b4cc234-f6b7-4801-a6d0-c98b72f446cf.jpg?1562897354","png":"https://cards.scryfall.io/png/front/0/b/0b4cc234-f6b7-4801-a6d0-c98b72f446cf.png?1562897354","art_crop":"https://cards.scryfall.io/art_crop/front/0/b/0b4cc234-f6b7-4801-a6d0-c98b72f446cf.jpg?1562897354","border_crop":"https://cards.scryfall.io/border_crop/front/0/b/0b4cc234-f6b7-4801-a6d0-c98b72f446cf.jpg?1562897354"},"mana_cost":"{2}{B}","cmc":3.0,"type_line":"Creature — Human Soldier","oracle_text":"Horsemanship (This creature can't be blocked except by creatures with horsemanship.)","power":"2","toughness":"1","colors":["B"],"color_identity":["B"],"keywords":["Horsemanship"],"legalities":{"standard":"not_legal","future":"not_legal","historic":"not_legal","timeless":"not_legal","gladiator":"not_legal","pioneer":"not_legal","explorer":"not_legal","modern":"not_legal","legacy":"legal","pauper":"legal","vintage":"legal","penny":"not_legal","commander":"legal","oathbreaker":"legal","standardbrawl":"not_legal","brawl":"not_legal","alchemy":"not_legal","paupercommander":"legal","duel":"legal","oldschool":"not_legal","premodern":"not_legal","predh":"legal"},"games":["mtgo"],"reserved":false,"game_changer":false,"foil":true,"nonfoil":true,"finishes":["nonfoil","foil"],"oversized":false,"promo":false,"reprint":true,"variation":false,"set_id":"b65fb1f2-4768-4c70-8fdf-30a069ad592e","set":"me3","set_name":"Masters Edition III","set_type":"masters","set_uri":"https://api.scryfall.com/sets/b65fb1f2-4768-4c70-8fdf-30a069ad592e","set_search_uri":"https://api.scryfall.com/cards/search?order=set&q=e%3Ame3&unique=prints","scryfall_set_uri":"https://scryfall.com/sets/me3?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/0b4cc234-f6b7-4801-a6d0-c98b72f446cf/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released&q=oracleid%3A002ad5fa-a20c-4d30-beef-401d89868d67&unique=prints","collector_number":"82","digital":true,"rarity":"common","flavor_text":"At the battle of Chang'an, Ma Chao defeated the two generals Cao Cao sent to guard the pass but was forced to flee when Cao Cao's trickery turned his own ally against him.","card_back_id":"0aeebaf5-8c7d-4636-9e82-8c27447861f7","artist":"Tang Xiaogu","artist_ids":["2519d1e1-dcbd-4ee5-a505-d20f8574268c"],"illustration_id":"8f2f1e80-93d3-4dac-ac91-dad8c108bd04","border_color":"black","frame":"1997","full_art":false,"textless":false,"booster":true,"story_spotlight":false,"edhrec_rank":24340,"penny_rank":16755,"prices":{"usd":null,"usd_foil":null,"usd_etched":null,"eur":null,"eur_foil":null,"tix":"0.06"},"related_uris":{"gatherer":"https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=201307&printed=false","tcgplayer_infinite_articles":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DWei%2BStrike%2BForce","tcgplayer_infinite_decks":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DWei%2BStrike%2BForce","edhrec":"https://edhrec.com/route/?cc=Wei+Strike+Force"},"purchase_uris":{"tcgplayer":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Fmagic%2Fproduct%3FproductLineName%3Dmagic%26q%3DWei%2BStrike%2BForce%26view%3Dgrid","cardmarket":"https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Wei+Strike+Force&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall","cardhoarder":"https://www.cardhoarder.com/cards/33832?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"}},
        {"object":"card","id":"491a3dc5-d297-47e1-acf9-dda103136519","oracle_id":"002e767c-0b30-4ad1-a924-88da400a4cff","multiverse_ids":[495967],"tcgplayer_id":222532,"cardmarket_id":503875,"name":"Marang River Prowler","lang":"en","released_at":"2020-09-25","uri":"https://api.scryfall.com/cards/491a3dc5-d297-47e1-acf9-dda103136519","scryfall_uri":"https://scryfall.com/card/znc/29/marang-river-prowler?utm_source=api","layout":"normal","highres_image":true,"image_status":"highres_scan","image_uris":{"small":"https://cards.scryfall.io/small/front/4/9/491a3dc5-d297-47e1-acf9-dda103136519.jpg?1604192521","normal":"https://cards.scryfall.io/normal/front/4/9/491a3dc5-d297-47e1-acf9-dda103136519.jpg?1604192521","large":"https://cards.scryfall.io/large/front/4/9/491a3dc5-d297-47e1-acf9-dda103136519.jpg?1604192521","png":"https://cards.scryfall.io/png/front/4/9/491a3dc5-d297-47e1-acf9-dda103136519.png?1604192521","art_crop":"https://cards.scryfall.io/art_crop/front/4/9/491a3dc5-d297-47e1-acf9-dda103136519.jpg?1604192521","border_crop":"https://cards.scryfall.io/border_crop/front/4/9/491a3dc5-d297-47e1-acf9-dda103136519.jpg?1604192521"},"mana_cost":"{2}{U}","cmc":3.0,"type_line":"Creature — Human Rogue","oracle_text":"This creature can't block and can't be blocked.\nYou may cast this card from your graveyard as long as you control a black or green permanent.","power":"2","toughness":"1","colors":["U"],"color_identity":["U"],"keywords":[],"legalities":{"standard":"not_legal","future":"not_legal","historic":"not_legal","timeless":"not_legal","gladiator":"not_legal","pioneer":"legal","explorer":"not_legal","modern":"legal","legacy":"legal","pauper":"not_legal","vintage":"legal","penny":"not_legal","commander":"legal","oathbreaker":"legal","standardbrawl":"not_legal","brawl":"not_legal","alchemy":"not_legal","paupercommander":"not_legal","duel":"legal","oldschool":"not_legal","premodern":"not_legal","predh":"not_legal"},"games":["paper"],"reserved":false,"game_changer":false,"foil":false,"nonfoil":true,"finishes":["nonfoil"],"oversized":false,"promo":false,"reprint":true,"variation":false,"set_id":"25c6bd9b-4e10-40a4-b9b5-0f4d9b5852a1","set":"znc","set_name":"Zendikar Rising Commander","set_type":"commander","set_uri":"https://api.scryfall.com/sets/25c6bd9b-4e10-40a4-b9b5-0f4d9b5852a1","set_search_uri":"https://api.scryfall.com/cards/search?order=set&q=e%3Aznc&unique=prints","scryfall_set_uri":"https://scryfall.com/sets/znc?utm_source=api","rulings_uri":"https://api.scryfall.com/cards/491a3dc5-d297-47e1-acf9-dda103136519/rulings","prints_search_uri":"https://api.scryfall.com/cards/search?order=released&q=oracleid%3A002e767c-0b30-4ad1-a924-88da400a4cff&unique=prints","collector_number":"29","digital":false,"rarity":"uncommon","flavor_text":"The currents of the Marang wash away both tracks and blood.","card_back_id":"0aeebaf5-8c7d-4636-9e82-8c27447861f7","artist":"Yefim Kligerman","artist_ids":["ff99b721-ae13-4822-af0d-868ba7ee62d9"],"illustration_id":"7b47a23c-e140-4bd9-bc00-ba4297c64776","border_color":"black","frame":"2015","full_art":false,"textless":false,"booster":false,"story_spotlight":false,"edhrec_rank":9693,"penny_rank":8550,"prices":{"usd":"0.12","usd_foil":null,"usd_etched":null,"eur":"0.13","eur_foil":null,"tix":null},"related_uris":{"gatherer":"https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=495967&printed=false","tcgplayer_infinite_articles":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Darticle%26game%3Dmagic%26q%3DMarang%2BRiver%2BProwler","tcgplayer_infinite_decks":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=infinite&u=https%3A%2F%2Finfinite.tcgplayer.com%2Fsearch%3FcontentMode%3Ddeck%26game%3Dmagic%26q%3DMarang%2BRiver%2BProwler","edhrec":"https://edhrec.com/route/?cc=Marang+River+Prowler"},"purchase_uris":{"tcgplayer":"https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F222532%3Fpage%3D1","cardmarket":"https://www.cardmarket.com/en/Magic/Products/Singles/Commander-Zendikar-Rising/Marang-River-Prowler?referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall","cardhoarder":"https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Marang+River+Prowler&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"}
    }];

    const cardHeight = 375;
    const cardWidth = 275;
    return(
        <div className="grid auto-rows-min gap-5">
            <div className="grid grid-cols-4">
                <div className="flex flex-col justify-center items-center gap-4 font-body">
                    <div className="flex text-6xl">
                        Cards to Add:
                    </div>
                    <div className="flex text-2xl">
                        Click to see suggested reasoning
                    </div>
                </div>
                <div className="flex justify-start gap-10 col-span-3">
                {cardsToAdd.map((card) => (
                    <div className="" key={card.id}>
                    <SuggestionModal card={card} />
                    </div>
                ))}
                </div>
            </div>
            <div className="max-h-fit">
                <Divider/>
            </div>
            <div className="grid grid-cols-4">
                <div className="flex flex-col justify-center items-center gap-4 font-body">
                    <div className="flex text-6xl">
                        Cards to Remove:
                    </div>
                    <div className="flex text-2xl">
                        Click to see suggested reasoning
                    </div>
                </div>
                <div className="flex justify-start gap-10 col-span-3">
                {cardsToAdd.map((card) => (
                    <div className="" key={card.id}>
                    <SuggestionModal card={card} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}