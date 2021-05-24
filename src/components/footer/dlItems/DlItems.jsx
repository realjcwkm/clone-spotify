/* eslint-disable react/prop-types */
import React from 'react';
import { DD, Dl, Dt, DDa } from '../styles';

export default function DlItems({ desc, links, descLinks }) {
  return (
    <Dl>
      <Dt>{desc}</Dt>
      {links.map((link, i) => (
        <DD>
          <DDa href={link}>{descLinks[i]}</DDa>
        </DD>
      ))}
    </Dl>
  );
}
