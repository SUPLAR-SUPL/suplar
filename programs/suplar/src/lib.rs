use anchor_lang::prelude::*;
use anchor_lang::solana_program::system_program;


declare_id!("vGtT1RHJvRYtwHEGAMg8WWzU8NKvrYTDHwB7M9cfkgQ");

#[program]
pub mod suplar {
    use super::*;
    // pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
    //     Ok(())
    // }

    pub fn create_fund(ctx: Context<CreateFund>, topic: String, content: String) -> ProgramResult {
        let fund: &mut Account<Fund> = &mut ctx.accounts.fund;
        let creator: &Signer = &ctx.accounts.creator;
        let clock: Clock = Clock::get().unwrap();


        if topic.chars().count() > 50 {
            return Err(ErrorCode::TopicTooLong.into())
        }
    
        if content.chars().count() > 280 {
            return Err(ErrorCode::ContentTooLong.into())
        }

        fund.creator = *creator.key;
        fund.timestamp = clock.unix_timestamp;
        fund.topic = topic;
        fund.content = content;


        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateFund<'info> {
    #[account(init, payer = creator, space = Fund::LEN)]
    pub fund: Account<'info, Fund>,
    #[account(mut)]
    pub creator: Signer<'info>,
    #[account(address = system_program::ID)]
    pub system_program: AccountInfo<'info>,
}

//  Define the structure of the Fund account.

#[account]
pub struct Fund {
    pub creator: Pubkey,
    pub timestamp: i64,
    pub topic: String,
    pub content: String,
}

// some useful constants for sizing propeties.
const DISCRIMINATOR_LENGTH: usize = 8;
const PUBLIC_KEY_LENGTH: usize = 32;
const TIMESTAMP_LENGTH: usize = 8;
const STRING_LENGTH_PREFIX: usize = 4; // Stores the size of the string.
const MAX_TOPIC_LENGTH: usize = 50 * 4; // 50 chars max.
const MAX_CONTENT_LENGTH: usize = 280 * 4; // 280 chars max.

// 3. Add a constant on the Tweet account that provides its total size.
impl Fund {
    const LEN: usize = DISCRIMINATOR_LENGTH
        + PUBLIC_KEY_LENGTH // Author.
        + TIMESTAMP_LENGTH // Timestamp.
        + STRING_LENGTH_PREFIX + MAX_TOPIC_LENGTH // Topic.
        + STRING_LENGTH_PREFIX + MAX_CONTENT_LENGTH; // Content.
}




#[error]
pub enum ErrorCode {
    #[msg("The provided topic should be 50 characters long maximum.")]
    TopicTooLong,
    #[msg("The provided content should be 280 characters long maximum.")]
    ContentTooLong,
}