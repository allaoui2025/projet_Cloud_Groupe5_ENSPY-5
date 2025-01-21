from locust import HttpUser, task, between

class PerformanceTest(HttpUser):
    wait_time = between(1, 2)

    @task
    def get_homepage(self):
        self.client.get("/")
