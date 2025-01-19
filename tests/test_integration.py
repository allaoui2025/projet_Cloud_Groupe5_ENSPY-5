import unittest
from app import app

class IntegrationTestCase(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()

    def test_add_task(self):
        response = self.client.post('/message', json={"name": "Alice"})
        self.assertEqual(response.status_code, 200)
        self.assertIn("Bonjour, Alice", response.get_json()["message"])

if __name__ == '__main__':
    unittest.main()
