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
