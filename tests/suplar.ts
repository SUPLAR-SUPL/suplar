import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Suplar } from '../target/types/suplar';
import * as assert from "assert";


describe('suplar', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Suplar as Program<Suplar>;

  // it('Is initialized!', async () => {
  //   // Add your test here.
  //   const tx = await program.rpc.initialize({});
  //   console.log("Your transaction signature", tx);
  // });


it('can create fund', async () => {
    // Call the "SendTweet" instruction.
    const fund = anchor.web3.Keypair.generate();
    await program.rpc.createFund('veganism', 'Hummus, am I right?', {
        accounts: {
            fund: fund.publicKey,
            creator: program.provider.wallet.publicKey,
            systemProgram: anchor.web3.SystemProgram.programId,
        },
        signers: [fund],
    });

    // Fetch the account details of the created tweet.
    const fundAccount = await program.account.fund.fetch(fund.publicKey);
  	console.log(fundAccount);

        // Ensure it has the right data.
    assert.equal(tweetAccount.author.toBase58(), program.provider.wallet.publicKey.toBase58());
    assert.equal(tweetAccount.topic, 'veganism');
    assert.equal(tweetAccount.content, 'Hummus, am I right?');
    assert.ok(tweetAccount.timestamp);

});


});
