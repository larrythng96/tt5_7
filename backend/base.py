from flask import Flask, jsonify
import os
import json

SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
json_url = os.path.join(SITE_ROOT, "db.json")
data = json.load(open(json_url))

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = jsonify(data["categories"])

    return response_body