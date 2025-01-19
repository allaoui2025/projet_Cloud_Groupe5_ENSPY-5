import unittest
from app import app

class FunctionalityTestCase(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()

    def test_homepage(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn("Bienvenue", response.data.decode())

if __name__ == '__main__':
    unittest.main()
