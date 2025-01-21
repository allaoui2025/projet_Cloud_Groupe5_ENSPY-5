import unittest
from app import app

class FlaskTestCase(unittest.TestCase):
    def test_home(self):
        tester = app.test_client(self)
        response = tester.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, b"Bienvenue sur l'API Flask du groupe 5 de cloud-computing !")

if __name__ == '__main__':
    unittest.main()
