import "core-js/stable";
import "regenerator-runtime/runtime";
import { waitForAppScreen, zemu } from './test.fixture';

test('[Nano S] Transfer on network 337 on CPChain', zemu("nanos", async (sim, eth) => {

  const tx = eth.signTransaction(
     "44'/337'/0'/0/0",
	 "f180808601a3185c5000830493e0941455d180e3ade94ebd9cc324d22a9065d1f5f575880de0b6b3a7640000808201518080"
  );

  await waitForAppScreen(sim);

  await sim.navigateAndCompareSnapshots('.', 'nanos_transfer_112233445566_network', [6, 0]);


  await expect(tx).resolves.toEqual({
     "r": "fca632e24bf16fa399064962a71ae0157fc9ec04f6184c4c608b401a5e88c570",
     "s": "0eb9aa3f5bf7ee4aacb0da87ae7be12430fd244dc24ee4ded07d68c2aa03a5ea",
     "v": "c6",
  });
}));
