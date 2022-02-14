use anchor_lang::prelude::*;

declare_id!("vGtT1RHJvRYtwHEGAMg8WWzU8NKvrYTDHwB7M9cfkgQ");

#[program]
pub mod suplar {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> ProgramResult {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
