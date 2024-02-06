
@Library('share-lib-pink-kpi') _
pipeline {
    agent {label 'slave01'}
    parameters {
        string(defaultValue: '' , description: '***REQUIRE_FIELD*** “Please put your application go-live month from the following format “MONTH_YEAR”. Example Jan_2022', name: 'release')
        text (defaultValue: '' , description: 'Multiple git repositories or branches scan is available by new line (1 line 1 URL). GitURL path example: git@gitdop.se.example.com:project/microservice.git;branch”.  Please make sure than semicolon (“;”) is used before branch.', name: 'gitURL')
        // text (defaultValue: null, description: 'Multiple images scan is available by new line (1 line 1 image). Image path example: facility/devsecops/python_ci:1.6', name: 'imageName')
    }
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
                    echo "Clone git repo from ${gitURL}"
                    sh "git clone ${gitURL}"
                    sh "ls -l"
                def codeDir = sh(
                    script: "ls",
                    returnStdout: true
                ).trim()
                env.project = codeDir   
                echo "Found code directory: ${env.project}"
                env.Coverity_scan = "PASS"
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


        stage('ContainerSecCp') {
            steps {
                prisma()
            }
        }

        // stage('Report'){
        //     steps {
        //         report()
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
