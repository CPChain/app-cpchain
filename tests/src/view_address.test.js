import "core-js/stable";
import "regenerator-runtime/runtime";
import { waitForAppScreen, zemu } from './test.fixture';

test('[Nano S] View address on CPChain', zemu("nanos", async (sim, cpc) => {
  const addr = cpc.getAddress("44'/337'/0'/0/0");

  await expect(addr).resolves.toEqual({
    publicKey: '048d479f645c9e3d018758442765875e60cb60ab36b3ac7eae70d48780bad9274bf170d362e6b18753b655a90f00053ffffd9b3f33a141af9e0cc0ea966cfb8030',
    address: '0x257B2127433bc3B8A3D184718809012AfaF5894D',
    chainCode: undefined
  });
}));

test('[Nano X] View address on CPChain', zemu("nanox", async (sim, cpc) => {
  const addr = cpc.getAddress("44'/337'/0'/0/0");

  await expect(addr).resolves.toEqual({
    publicKey: '048d479f645c9e3d018758442765875e60cb60ab36b3ac7eae70d48780bad9274bf170d362e6b18753b655a90f00053ffffd9b3f33a141af9e0cc0ea966cfb8030',
    address: '0x257B2127433bc3B8A3D184718809012AfaF5894D',
    chainCode: undefined
  });
}));

