import "core-js/stable";
import "regenerator-runtime/runtime";
import { waitForAppScreen, zemu } from './test.fixture';

test('[Nano S] Transfer on network 337 on CPChain', zemu("nanos", async (sim, eth) => {

  const tx = eth.signTransaction(
     "44'/337'/0'/0/0",
	 "f180808601a3185c5000830493e0941455d180e3ade94ebd9cc324d22a9065d1f5f575880de0b6b3a7640000808201518080"
  );

  // await waitForAppScreen(sim);
  // await sim.navigateAndCompareSnapshots('.', 'nanos_transfer_112233445566_network', [9, 0]);

  // await expect(tx).resolves.toEqual({
  //   "r": "509981d8dfb66757e25ff47c009b9b5bc5db0f169473e4735f5212b144f1c069",
  //   "s": "5db989d81025de3c846e41a9ce01a3f9fd0982e2d827f1b88ffc95d73a48d04c",
  //   "v": "344344f19f",
  // });
}));
