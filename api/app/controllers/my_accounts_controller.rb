class MyAccountsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_my_account, only: [:edit, :update]

  def edit
    # Retrieve the account details for the current user
    @my_account = current_user.my_account
  end

  def update
    if @my_account.update(my_account_params)
      redirect_to edit_my_account_path, notice: 'Account updated successfully.'
    else
      render :edit
    end
  end

  def account_info
    # Retrieve the account details for the current user
    @my_account = current_user.my_account
    render json: @my_account
  end

  def create
    @my_account = MyAccount.new(my_account_params)
    @my_account.user = current_user

    if @my_account.save
      redirect_to edit_my_account_path, notice: 'Account created successfully.'
    else
      render :new
    end
  end

  private

  def set_my_account
    @my_account = current_user.my_account || current_user.build_my_account
  end

  def my_account_params
    params.require(:my_account).permit(:full_name, :phone_number, :gender, :date_of_birth, :email)
  end
end
