import pytest
import os
import sys
from fastapi.testclient import TestClient
import main

client = TestClient(main.app)


def test_get_predictions_returns_200():
    response = client.get("/auth/get_prediction")
    assert response.status_code == 200
