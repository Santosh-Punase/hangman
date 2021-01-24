const randomWords = [
  'bass',
  'wind instrument',
  'calliope',
  'grind organ',
  'electronic musical instrument',
  'wheel fiddle',
  'mouth bow',
  'hand organ',
  'percussion instrument',
  'percussive instrument',
  'jew"s harp',
  'wind',
  'hurdy-gurdy',
  'hurdy gurdy',
  'barrel organ',
  'steam organ',
  'stringed instrument',
  'keyboard instrument',
  'electronic instrument',
  'music box',
  'musical box',
  'will',
  'act',
  'affidavit',
  'arraignment',
  'articles of incorporation',
  'assignment',
  'authorisation',
  'authorization',
  'bill',
  'bill of indictment',
  'brief',
  'certificate',
  'conveyance',
  'debenture',
  'deed',
  'deed of conveyance',
  'deed of trust',
  'derivative',
  'derivative instrument',
  'enactment',
  'impeachment',
  'income tax return',
  'indictment',
  'judgement',
  'judgment',
  'judicial writ',
  'law',
  'legal brief',
  'legal opinion',
  'letters of administration',
  'letters patent',
  'letters testamentary',
  'licence',
  'license',
  'living will',
  'mandate',
  'manifest',
  'measure',
  'negotiable instrument',
  'opinion',
  'passport',
  'patent',
  'permit',
  'power of attorney',
  'release',
  'return',
  'security',
  'ship"s papers',
  'tax return',
  'testament',
  'title',
  'trust deed',
  'acquittance',
  'work papers',
  'work permit',
  'working papers',
  'writ',
  'written agreement',
  'measuring device',
  'measuring instrument',
  'measuring system',
  'medical instrument',
  'optical instrument',
  'cauterant',
  'engine',
  'navigational instrument',
  'extractor',
  'organ',
  'harmonium',
  'plotter',
  'reed organ',
  'scientific instrument',
  'cautery',
  'arm',
  'sonograph',
  'surveying instrument',
  'surveyor"s instrument',
  'instrument of execution',
  'instrument of punishment',
  'tracer',
  'weapon',
  'weapon system',
  'whip',
  'analyser',
  'analyzer',
  'drafting instrument'
];

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
}

const getValidWords = (): string[] => randomWords
        .filter(w => w.match('^[a-zA-Z]+$'))
        .filter(w => w.length > 4 && w.length < 12);


const getGuessWord = (): Promise<string> => {
  const validWords: string[] = getValidWords();

  const word = validWords[getRandomInt(validWords.length)];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(word);
    }, 500);
  });
}

export { getRandomInt, getValidWords, getGuessWord };
