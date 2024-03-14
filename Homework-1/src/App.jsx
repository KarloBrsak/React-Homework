import React from 'react';
import { Introduction } from './components/Introduction';
import { DiscoElysium } from './components/DiscoElysium';
import { NierAutomata } from './components/NierAutomata';
import { OuterWilds } from './components/OuterWilds';
import { HalfLife } from './components/HalfLife';

export function App() {
  return (
    <div>
      <Introduction />
      <hr />
      <DiscoElysium />
      <hr />
      <NierAutomata />
      <hr />
      <OuterWilds />
      <hr />
      <HalfLife />
    </div>
  );
}
