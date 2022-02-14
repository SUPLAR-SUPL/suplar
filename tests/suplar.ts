import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Suplar } from '../target/types/suplar';

describe('suplar', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Suplar as Program<Suplar>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
