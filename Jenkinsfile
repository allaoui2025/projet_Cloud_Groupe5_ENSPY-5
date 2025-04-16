pipeline {
    agent any

    stages {
        stage('Maven Build & Test') {
            steps {
                dir('projetCloud') {
                    sh 'mvn clean install'
                }
            }
        }

        stage('Semgrep SAST') {
            steps {
                dir('projetCloud') {
                    sh 'semgrep scan --config auto . || true'
                }
            }
        }
    }
}
stage('Trivy Scan') {
    steps {
        script {
            def imageName = "farid2025/projetcloud-backend:latest"
            sh "docker build -t ${imageName} ./projetCloud"
            sh "trivy image --no-progress --severity CRITICAL,HIGH ${imageName} || true"
        }
    }
}
