class WelcomeController < ApplicationController
  def index
    @payload = {"type": "mcq",
    "widget_type": "response",
    "reference": "EDM_Unit_MM_2_10",
    "data": {
       "options": [
          {
             "label": "First touch attribution",
             "value": "0"
          },
          {
             "label": "Last touch attribution",
             "value": "1"
          },
          {
             "label": "Time decay attribution",
             "value": "2"
          },
          {
             "label": "Linear attribution",
             "value": "3"
          }
       ],
       "type": "mcq",
       "ui_style": {
          "type": ""
       },
       "validation": {
          "scoring_type": "exactMatch",
          "valid_response": {
             "score": 1,
             "value": [
                "3"
             ]
          }
       },
       "instant_feedback": true,
       "feedback_attempts": 1,
       "metadata": {
          "distractor_rationale_response_level": [
             "",
             "",
             "",
             ""
          ]
       },
       "stimulus": "<p>The Yahoo ad had a big impact on visits to the CreditExpert site. But there are many other touchpoints in the marketing mix for this launch. What attribution model would you most want to use to appropriately give credit to the Yahoo ad?</p>\n"
    }} 
  end
end
