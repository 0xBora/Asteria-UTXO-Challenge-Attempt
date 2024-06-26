import { fromText } from "https://deno.land/x/lucid@0.10.7/mod.ts";
import { moveShip } from "./transactions/move-ship.ts";
import { createShip } from "./transactions/create-ship.ts";
import { AssetClassT } from "./transactions/types.ts";

// Challenge parameters, these are defined by the administrators, you can find this on the
const ASTERIA_SCRIPT_INPUT =
  "c2badd0df205f93fef630785163b86d6872c2190cf4dd7628a3934b89b56f9bb";
const SPACETIME_SCRIPT_INPUT =
  "431aaa1871f6187d3f3ebebafd41ef17f712d3af54c0bba4ff780ed176179603";
const FUEL_SCRIPT_INPUT =
  "87f626782b975a1496d751746b2a78579f9378a4843e00e72c4e9a74f519f24f";
const FUEL_PER_STEP = 1n;
const INITIAL_FUEL = 30n;
const PARTICIPATION_FEE = 20_000_000n;
const CHALLENGE_TOKEN: AssetClassT = {
  policy: "516238dd0a79bac4bebe041c44bad8bf880d74720733d2fc0d255d28",
  name: fromText("asteriaAdmin"),
};

// Ship parameters, these are defined by the participant when starting the challenge.
const INITIAL_POS_X = -35n;
const INITIAL_POS_Y = -15n;

//const txHash = await createShip(
//   ASTERIA_SCRIPT_INPUT,
//   SPACETIME_SCRIPT_INPUT,
//   CHALLENGE_TOKEN,
//   PARTICIPATION_FEE,
//   INITIAL_FUEL,
//   INITIAL_POS_X,
//   INITIAL_POS_Y
// );

// console.log(txHash);

const delta_x = 5n;
const delta_y = 0n;
const shipTxHash =
  "992de3792074eedce543a5590d997b54073273eb3b7918b2b74c9d312e742285";

const txHash = await moveShip(
  SPACETIME_SCRIPT_INPUT,
  FUEL_PER_STEP,
  delta_x,
  delta_y,
  shipTxHash
);

console.log(txHash);
