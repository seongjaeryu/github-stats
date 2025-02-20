import type {Locale} from '~/i18n';
import type {ReactElement} from 'react';
import Scouter from './Scouter';
import {getDoobooStats} from '../../../../server/services/githubService';
import {getTranslates} from '../../../../src/localization';
import Container from '../Container';

type Props = {
  params: {lang: Locale; login: string};
};

export default async function Page({
  params: {lang, login},
}: Props): Promise<ReactElement> {
  const {stats: tStats} = await getTranslates(lang);
  const stats = await getDoobooStats({
    login,
    lang,
  });

  return (
    <Container t={tStats}>
      {!!stats ? <Scouter stats={stats} t={tStats} /> : null}
    </Container>
  );
}
