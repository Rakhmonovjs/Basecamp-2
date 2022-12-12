require "application_system_test_case"

class MessengersTest < ApplicationSystemTestCase
  setup do
    @messenger = messengers(:one)
  end

  test "visiting the index" do
    visit messengers_url
    assert_selector "h1", text: "Messengers"
  end

  test "should create messenger" do
    visit messengers_url
    click_on "New messenger"

    fill_in "Message", with: @messenger.message_id
    fill_in "Title", with: @messenger.title
    click_on "Create Messenger"

    assert_text "Messenger was successfully created"
    click_on "Back"
  end

  test "should update Messenger" do
    visit messenger_url(@messenger)
    click_on "Edit this messenger", match: :first

    fill_in "Message", with: @messenger.message_id
    fill_in "Title", with: @messenger.title
    click_on "Update Messenger"

    assert_text "Messenger was successfully updated"
    click_on "Back"
  end

  test "should destroy Messenger" do
    visit messenger_url(@messenger)
    click_on "Destroy this messenger", match: :first

    assert_text "Messenger was successfully destroyed"
  end
end
