import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  public markSalads(): string {
    return "Salads";
  }

  public markOthers(): string {
    return "others";
  }

  public markSandwich(): string {
    return "Sandwiches";
  }

  public markSandwichOnCroissant(): string {
    return "Sandwiches on croissant";
  }

  public recognize(ingredients: string): string {
    const regex = /[A-Za-z]/g;
    const ing = ingredients.split("[option]");
    const ord = ing[1] ? ing[1] : ingredients;
    const str = ord.toLowerCase().match(regex)?.sort().join('');

    const sandwiches: string[] = [
      'smokedchickenbaconswisscheese',
      'hambriegreenapplemixedgreenmayo',
      'tunasaladwithmixedgreensandtomato',
      'prosciuttocheesetomatobutter',
      'salamibuttertomatomixedgreens',
      'smokedturkeybreastwhitecheddar',
      'grilledvegetablesmixedgreensavocadoandherbedgoatcheeseveg',
      'smokedsalmoncreamcheesecucumber',
      'chickenavocadomixedgreensandcheese',
      'chickenonionpepperscheeseandcajunmayodressing',
      'roastbeefroastedpepperscookedonionsmixedgreensandcheese',
      'croquemonsieurhamcheeseandbchamelsauce'
    ];

    const sandwichesS: string[] = [
      'abccccdeeeeehhiikkmnnoosssssw',
      'aaabdeeeeeeegghiilmmmnnopprrrxy',
      'aaaaadddeeeghiilmmnnnoorssttttuwx',
      'abcceeeehimooooprrssttttttuu',
      'aaabdeeeegiilmmmnoorrssttttux',
      'aabcdddeeeeehhikkmorrrsstttuwy',
      'aaaaabbccdddddeeeeeeeeeeeeeggggghhiilllmnnooorrrsssttvvvx',
      'aabccccdeeeeeehklmmmmnoorrsssuu',
      'aaaccccdddeeeeeeeghhiikmnnnoorssvx',
      'aaaccccddeeeeeeeghhiiijkmnnnnnnoooppprrssssuy',
      'aaabccddddeeeeeeeeeeeefghiikmnnnnooooooppprrrrssssssttx',
      'aaaabccccdeeeeeeehhhilmmmnnooqrrsssuuu'
    ];

    const onCroissant: string[] = [
      'cheeseandomelette',
      'hamcheesemayoandmixedgreens',
      'hamandcheeseomelette',
      'turkeycheesemayoandmixedgreens',
      'turkeyandmushroomomelette',
      'spinachandcheeseomelette'
    ];

    const onCroissantS: string[] = [
      'acdeeeeeehlmnostt',
      'aaacddeeeeeeghhimmmnnorssxy',
      'aacdeeeeeehhlmmnostt',
      'aacddeeeeeeeghikmmnnorrsstuxyy',
      'adeeeehklmmmnooorrstttuuy',
      'aaccdeeeeeehhilmnnopsstt'
    ];

    const salads: string[] = [
      'kalesaladwithtomatoesalmondsredonionsseedswithlemonandoliveoildressing',
      'quinoaedamamedriedfruitsnutswithlemonandoliveoildressing',
      'tomatobocconcinibasilandmixedgreenswithlemonandoliveoildressing',
      'smallpotatoeseggspicklesredonionandmayodressing',
      'freshgardensaladwithmixedgreenscarrotstomatoescucumbersseedswithlemonandoliveoildressing',
      'mediterraneantomatocucumberredonionfetacheesemixedgreenswithlemonandoliveoildressing',
      'mediterraneanwithpastatomatocucumberredonionfetacheesemixedgreenswithlemonandoliveoildressing',
      'nioisewithwhitetuna',
      'cobbboiledeggsavocadocorn',
      'quinoaandkaleveg',
      'chickenandfeta'
    ];

    const saladsS: string[] = [
      'aaaaaaddddddeeeeeeeeghhiiiiiikllllllmmmnnnnnnoooooooorrssssssssttttvww',
      'aaaadddddeeeeeefghiiiiiiilllmmmnnnnnooooqrrrsssstttuuuvw',
      'aaaabbcccddddeeeeeegghiiiiiiiillllmmmnnnnnnnooooooorrsssstttvwx',
      'aaaacdddeeeeegggiiiklllmmnnnnooooopprrsssssstty',
      'aaaaaabcccddddddeeeeeeeeeeeefggghhhiiiiiillllmmmmnnnnnoooooorrrrrrrsssssssssstttttuuvwwx',
      'aaaaabcccdddddeeeeeeeeeeeeeeefgghhiiiiiiilllmmmmmnnnnnnnnooooooorrrrrrsssstttttuuvwx',
      'aaaaaaabcccdddddeeeeeeeeeeeeeeefgghhhiiiiiiiilllmmmmmnnnnnnnnoooooooprrrrrrssssstttttttuuvwwx',
      'aeehhiiiinnostttuww',
      'aabbbcccddeeggilnooooorsv',
      'aaadeegiklnnoquv',
      'aaccdeefhiknnt'
    ];

    for (let i = 0; i < sandwichesS.length; i++) {
      if(str == sandwichesS[i]) {
        return this.markSandwich();
      }
    }

    for (let i = 0; i < onCroissantS.length; i++) {
      if(str == onCroissantS[i]) {
        return this.markSandwichOnCroissant();
      }
    }

    for (let i = 0; i < saladsS.length; i++) {
      if(str == saladsS[i]) {
        return this.markSalads();
      }
    }

    return this.markOthers();
  }

}
