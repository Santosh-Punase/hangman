import { getRandomInt, getValidWords } from './helper';

test('should get random interger', () => {
  expect([0,1].includes(getRandomInt(1))).toBe(true);
  expect([0,1,2].includes(getRandomInt(2))).toBe(true);
  expect([0,1,2,3].includes(getRandomInt(3))).toBe(true);
});


test('should filter out in-valid words', () => {
  expect(getValidWords()).toEqual([
    'calliope',
    'affidavit',
    'arraignment',
    'assignment',
    'brief',
    'certificate',
    'conveyance',
    'debenture',
    'derivative',
    'enactment',
    'impeachment',
    'indictment',
    'judgement',
    'judgment',
    'licence',
    'license',
    'mandate',
    'manifest',
    'measure',
    'opinion',
    'passport',
    'patent',
    'permit',
    'release',
    'return',
    'security',
    'testament',
    'title',
    'acquittance',
    'cauterant',
    'engine',
    'extractor',
    'organ',
    'harmonium',
    'plotter',
    'cautery',
    'sonograph',
    'tracer',
    'weapon',
    'analyser',
    'analyzer',
  ]);
});