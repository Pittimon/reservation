@Library('share-lib-pink-kpi') _
pipeline {
    agent {label 'slave01'}

    environment {
        covPath = "/apps/devsecops/coverity/cov-analysis-linux64-2023.9.2/bin"
        covUrl = "https://192.168.172.101:8443/"
        // covUrl = "https://54.179.98.80:8443/"
        cpPath = "/apps/devsecops/checkpoint/shiftleft"
        bdPath = "/apps/devsecops/blackduck/synopsys-detect-9.2.0.jar"
        // bdPath = "/app/blackduck/synopsys-detect-8.6.0.jar"
        bdUrl = "https://192.168.172.102/"
        // bdUrl = "https://18.143.188.111/"
        PmUrl = "https://console-master-s.m.demo.twistlock.com"
        // sigmaPath = "/app/blackduck/sigma"
        envId = "af667c02-7cde-48e2-b834-61947af31072"
        registryName = "Docker Hub"
        scriptPath = "/home/jenkins/defectdojo"
        // reportDir = "/app/aqua"
        covConfig = "/apps/devsecops/coverity/cov-reports-2023.9.2/config"
        covReport = "/apps/devsecops/coverity/cov-reports-2023.9.2/bin"
        Buildnumber = "01"
        twistclipath = '/apps/devsecops/prisma/twistcli'
    }

    stages {
        stage('PrepareCode') {
            steps {
                script {
                    REPO_NAME = sh(script: 'basename -s .git `git config --get remote.origin.url`', returnStdout: true).trim()
                    println(REPO_NAME)
                    env.project = REPO_NAME
                    env.release = BUILD_NUMBER
                    env.Coverity_scan = "NOT_EXECUTED"
                    env.Blackduck_scan = "NOT_EXECUTED"
                    env.Prisma_scan = "NOT_EXECUTED"
                }
                    
            }
        }

        stage('SAST') {
            steps {
                coverity()
            }
        }

        stage('SCA') {
            steps {
                blackduck()
            }
        }


        // stage('ContainerSecCp') {
        //     steps {
        //         prisma()
        //     }
        // }

        stage('ImportReport'){
            steps {
                importreport()
            }
        }

    }


        


post {
    always {
        // archiveArtifacts artifacts: "*.xlsx, *.pdf", onlyIfSuccessful: true
        deleteDir()
        script {
            sh '''
                rm -f ${scriptPath}/*.json
            '''
        }
    }
}

}
