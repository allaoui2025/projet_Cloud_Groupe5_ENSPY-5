pipeline {
    agent any

    stages {
        stage('Maven Build & Test') {
            steps {
                dir('backend') {
                    sh 'mvn clean install'
                }
            }
        }

        stage('Semgrep SAST') {
            steps {
                dir('backend') {
                    sh 'semgrep scan --config auto . || true'
                }
            }
        }

        stage('Trivy Scan') {
            steps {
                dir('backend') {
                    sh 'docker build -t farid2025/projetcloud-backend:latest .'
                    sh 'trivy image --severity CRITICAL,HIGH farid2025/projetcloud-backend:latest || true'
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                dir('backend') {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                        sh 'docker push farid2025/projetcloud-backend:latest'
                    }
                }
            }
        }
    }
}


