'use client';

import { GuideMessage } from './styles';

import Box from '@/components/Box';

export default function Page() {
  //NOTE ESLint error code for test
  // const testFunction = () => {
  //   if (x === -0) {
  //     // doSomething()...
  //     for (var i = 0; i < 10; i--) {}
  //   }
  // };

  return (
    <Box>
      <GuideMessage>{'This is Adminpage'}</GuideMessage>
    </Box>
  );
}
