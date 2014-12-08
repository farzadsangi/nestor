/**
 * Created by Fathalian on 11/10/14.
 */
'use strict';

var app = angular.module('nestorApp');

app.controller('LoadInfrastructure', ['$scope', '$rootScope', '$modalInstance', '$timeout',
  function ($scope, $rootScope, $modalInstance, $timeout) {

    var infra = {
      components: {
        'EC21': {
          'id': 'EC21',
          'type': 'AWS::EC2::Instance',
          'name': 'EC21',
          'description': 'Resizable compute machines',
          'image': 'images/aws/ec2.png',
          'x': 143,
          'y': 288,
          'required': [
            {
              'name': 'BlockDeviceMappings',
              'type': 'BlockDeviceMappings',
              'description': ''
            },
            {
              'name': 'AvailabilityZone',
              'type': 'String',
              'description': 'Specifies the name of the Availability Zone in which the instance is located',
              'allowableValues': [
                {
                  'ap-northeast-1b': 'Asia Pacific (Tokyo)'
                },
                {
                  'ap-southeast-1b': 'Asia Pacific (Singapore)'
                },
                {
                  'ap-southeast-2b': 'Asia Pacific (Sydney)'
                },
                {
                  'eu-central-1b': 'EU (Frankfurt)'
                },
                {
                  'eu-west-1b': 'EU (Ireland)'
                },
                {
                  'sa-east-1b': 'South America (Sao Paulo)'
                },
                {
                  'us-east-1b': 'US East (N. Virginia)'
                },
                {
                  'us-west-1b': 'US West (N. California)'
                },
                {
                  'us-west-2b': 'US West (Oregon)'
                }
              ]
            },
            {
              'name': 'InstanceType',
              'type': 'String',
              'description': 'Description for tooltip',
              'allowableValues': [
                {
                  't2.micro': 't2.micro'
                },
                {
                  't2.small': 't2.small'
                },
                {
                  't2.medium': 't2.medium'
                },
                {
                  'm3.medium': 'm3.medium'
                },
                {
                  'm3.large': 'm3.large'
                },
                {
                  'm3.xlarge': 'm3.xlarge'
                },
                {
                  'm3.2xlarge': 'm3.2xlarge'
                },
                {
                  'c3.large': 'c3.large'
                },
                {
                  'c3.xlarge': 'c3.xlarge'
                },
                {
                  'c3.2xlarge': 'c3.2xlarge'
                },
                {
                  'c3.4xlarge': 'c3.4xlarge'
                },
                {
                  'c3.8xlarge': ' c3.8xlarge'
                },
                {
                  'r3.large': 'r3.large'
                },
                {
                  'r3.xlarge': 'r3.xlarge'
                },
                {
                  'r3.2xlarge': 'r3.2xlarge'
                },
                {
                  'r3.4xlarge': 'r3.4xlarge'
                },
                {
                  'r3.8xlarge': 'r3.8xlarge'
                },
                {
                  'i2.xlarge': 'i2.xlarge'
                },
                {
                  'i2.2xlarge': 'i2.2xlarge'
                },
                {
                  'i2.4xlarge': 'i2.4xlarge'
                },
                {
                  'i2.8xlarge': 'i2.8xlarge'
                },
                {
                  'hs1.8xlarge': 'hs1.8xlarge'
                },
                {
                  'g2.2xlarge': 'g2.2xlarge'
                }
              ]
            }
          ],
          'parent': '',
          'blockType': 'box'
        },
        'EC22': {
          'id': 'EC22',
          'type': 'AWS::EC2::Instance',
          'name': 'EC22',
          'description': 'Resizable compute machines',
          'image': 'images/aws/ec2.png',
          'x': 371,
          'y': 287,
          'required': [
            {
              'name': 'BlockDeviceMappings',
              'type': 'BlockDeviceMappings',
              'description': ''
            },
            {
              'name': 'AvailabilityZone',
              'type': 'String',
              'description': 'Specifies the name of the Availability Zone in which the instance is located',
              'allowableValues': [
                {
                  'ap-northeast-1b': 'Asia Pacific (Tokyo)'
                },
                {
                  'ap-southeast-1b': 'Asia Pacific (Singapore)'
                },
                {
                  'ap-southeast-2b': 'Asia Pacific (Sydney)'
                },
                {
                  'eu-central-1b': 'EU (Frankfurt)'
                },
                {
                  'eu-west-1b': 'EU (Ireland)'
                },
                {
                  'sa-east-1b': 'South America (Sao Paulo)'
                },
                {
                  'us-east-1b': 'US East (N. Virginia)'
                },
                {
                  'us-west-1b': 'US West (N. California)'
                },
                {
                  'us-west-2b': 'US West (Oregon)'
                }
              ]
            },
            {
              'name': 'InstanceType',
              'type': 'String',
              'description': 'Description for tooltip',
              'allowableValues': [
                {
                  't2.micro': 't2.micro'
                },
                {
                  't2.small': 't2.small'
                },
                {
                  't2.medium': 't2.medium'
                },
                {
                  'm3.medium': 'm3.medium'
                },
                {
                  'm3.large': 'm3.large'
                },
                {
                  'm3.xlarge': 'm3.xlarge'
                },
                {
                  'm3.2xlarge': 'm3.2xlarge'
                },
                {
                  'c3.large': 'c3.large'
                },
                {
                  'c3.xlarge': 'c3.xlarge'
                },
                {
                  'c3.2xlarge': 'c3.2xlarge'
                },
                {
                  'c3.4xlarge': 'c3.4xlarge'
                },
                {
                  'c3.8xlarge': ' c3.8xlarge'
                },
                {
                  'r3.large': 'r3.large'
                },
                {
                  'r3.xlarge': 'r3.xlarge'
                },
                {
                  'r3.2xlarge': 'r3.2xlarge'
                },
                {
                  'r3.4xlarge': 'r3.4xlarge'
                },
                {
                  'r3.8xlarge': 'r3.8xlarge'
                },
                {
                  'i2.xlarge': 'i2.xlarge'
                },
                {
                  'i2.2xlarge': 'i2.2xlarge'
                },
                {
                  'i2.4xlarge': 'i2.4xlarge'
                },
                {
                  'i2.8xlarge': 'i2.8xlarge'
                },
                {
                  'hs1.8xlarge': 'hs1.8xlarge'
                },
                {
                  'g2.2xlarge': 'g2.2xlarge'
                }
              ]
            }
          ],
          'parent': '',
          'blockType': 'box'
        },
        'EC23': {
          'id': 'EC23',
          'type': 'AWS::EC2::Instance',
          'name': 'EC23',
          'description': 'Resizable compute machines',
          'image': 'images/aws/ec2.png',
          'x': 591,
          'y': 291,
          'required': [
            {
              'name': 'BlockDeviceMappings',
              'type': 'BlockDeviceMappings',
              'description': ''
            },
            {
              'name': 'AvailabilityZone',
              'type': 'String',
              'description': 'Specifies the name of the Availability Zone in which the instance is located',
              'allowableValues': [
                {
                  'ap-northeast-1b': 'Asia Pacific (Tokyo)'
                },
                {
                  'ap-southeast-1b': 'Asia Pacific (Singapore)'
                },
                {
                  'ap-southeast-2b': 'Asia Pacific (Sydney)'
                },
                {
                  'eu-central-1b': 'EU (Frankfurt)'
                },
                {
                  'eu-west-1b': 'EU (Ireland)'
                },
                {
                  'sa-east-1b': 'South America (Sao Paulo)'
                },
                {
                  'us-east-1b': 'US East (N. Virginia)'
                },
                {
                  'us-west-1b': 'US West (N. California)'
                },
                {
                  'us-west-2b': 'US West (Oregon)'
                }
              ]
            },
            {
              'name': 'InstanceType',
              'type': 'String',
              'description': 'Description for tooltip',
              'allowableValues': [
                {
                  't2.micro': 't2.micro'
                },
                {
                  't2.small': 't2.small'
                },
                {
                  't2.medium': 't2.medium'
                },
                {
                  'm3.medium': 'm3.medium'
                },
                {
                  'm3.large': 'm3.large'
                },
                {
                  'm3.xlarge': 'm3.xlarge'
                },
                {
                  'm3.2xlarge': 'm3.2xlarge'
                },
                {
                  'c3.large': 'c3.large'
                },
                {
                  'c3.xlarge': 'c3.xlarge'
                },
                {
                  'c3.2xlarge': 'c3.2xlarge'
                },
                {
                  'c3.4xlarge': 'c3.4xlarge'
                },
                {
                  'c3.8xlarge': ' c3.8xlarge'
                },
                {
                  'r3.large': 'r3.large'
                },
                {
                  'r3.xlarge': 'r3.xlarge'
                },
                {
                  'r3.2xlarge': 'r3.2xlarge'
                },
                {
                  'r3.4xlarge': 'r3.4xlarge'
                },
                {
                  'r3.8xlarge': 'r3.8xlarge'
                },
                {
                  'i2.xlarge': 'i2.xlarge'
                },
                {
                  'i2.2xlarge': 'i2.2xlarge'
                },
                {
                  'i2.4xlarge': 'i2.4xlarge'
                },
                {
                  'i2.8xlarge': 'i2.8xlarge'
                },
                {
                  'hs1.8xlarge': 'hs1.8xlarge'
                },
                {
                  'g2.2xlarge': 'g2.2xlarge'
                }
              ]
            }
          ],
          'parent': '',
          'blockType': 'box'
        },
        'BlockDeviceMappings4': {
          'id': 'BlockDeviceMappings4',
          'type': 'BlockDeviceMappings',
          'name': 'BlockDeviceMappings4',
          'image': 'images/aws/blockDeviceMapping.png',
          'x': 207,
          'y': 500,
          'required': [
            {
              'name': 'AvailabilityZone',
              'type': 'String',
              'description': '',
              'allowableValues': [
                {
                  'ap-northeast-1': 'Asia Pacific (Tokyo)'
                },
                {
                  'ap-southeast-1': 'Asia Pacific (Singapore)'
                },
                {
                  'ap-southeast-2': 'Asia Pacific (Sydney)'
                },
                {
                  'eu-central-1': 'EU (Frankfurt)'
                },
                {
                  'eu-west-1': 'EU (Ireland)'
                },
                {
                  'sa-east-1': 'South America (Sao Paulo)'
                },
                {
                  'us-east-1': 'US East (N. Virginia)'
                },
                {
                  'us-west-1': 'US West (N. California)'
                },
                {
                  'us-west-2': 'US West (Oregon)'
                }
              ]
            }
          ],
          'optional': [
            {
              'name': 'Encrypted',
              'type': 'Boolean',
              'description': ''
            },
            {
              'name': 'Iops',
              'type': 'Number',
              'description': ''
            },
            {
              'name': 'Size',
              'type': 'String',
              'description': ''
            },
            {
              'name': 'SnapshotId',
              'type': 'String',
              'description': ''
            },
            {
              'name': 'Tags',
              'type': 'Tags',
              'description': 'An arbitrary set of tags (key–value pairs) for this volume.'
            },
            {
              'name': 'VolumeType',
              'type': 'String',
              'description': ''
            }
          ],
          'parent': 'EC21',
          'isDerived': true,
          'blockType': 'drag',
          'index': 0
        },
        'BlockDeviceMappings5': {
          'id': 'BlockDeviceMappings5',
          'type': 'BlockDeviceMappings',
          'name': 'BlockDeviceMappings5',
          'image': 'images/aws/blockDeviceMapping.png',
          'x': 471,
          'y': 528,
          'required': [
            {
              'name': 'AvailabilityZone',
              'type': 'String',
              'description': '',
              'allowableValues': [
                {
                  'ap-northeast-1': 'Asia Pacific (Tokyo)'
                },
                {
                  'ap-southeast-1': 'Asia Pacific (Singapore)'
                },
                {
                  'ap-southeast-2': 'Asia Pacific (Sydney)'
                },
                {
                  'eu-central-1': 'EU (Frankfurt)'
                },
                {
                  'eu-west-1': 'EU (Ireland)'
                },
                {
                  'sa-east-1': 'South America (Sao Paulo)'
                },
                {
                  'us-east-1': 'US East (N. Virginia)'
                },
                {
                  'us-west-1': 'US West (N. California)'
                },
                {
                  'us-west-2': 'US West (Oregon)'
                }
              ]
            }
          ],
          'optional': [
            {
              'name': 'Encrypted',
              'type': 'Boolean',
              'description': ''
            },
            {
              'name': 'Iops',
              'type': 'Number',
              'description': ''
            },
            {
              'name': 'Size',
              'type': 'String',
              'description': ''
            },
            {
              'name': 'SnapshotId',
              'type': 'String',
              'description': ''
            },
            {
              'name': 'Tags',
              'type': 'Tags',
              'description': 'An arbitrary set of tags (key–value pairs) for this volume.'
            },
            {
              'name': 'VolumeType',
              'type': 'String',
              'description': ''
            }
          ],
          'parent': 'EC22',
          'isDerived': true,
          'blockType': 'drag',
          'index': 0
        },
        'BlockDeviceMappings6': {
          'id': 'BlockDeviceMappings6',
          'type': 'BlockDeviceMappings',
          'name': 'BlockDeviceMappings6',
          'image': 'images/aws/blockDeviceMapping.png',
          'x': 768,
          'y': 528,
          'required': [
            {
              'name': 'AvailabilityZone',
              'type': 'String',
              'description': '',
              'allowableValues': [
                {
                  'ap-northeast-1': 'Asia Pacific (Tokyo)'
                },
                {
                  'ap-southeast-1': 'Asia Pacific (Singapore)'
                },
                {
                  'ap-southeast-2': 'Asia Pacific (Sydney)'
                },
                {
                  'eu-central-1': 'EU (Frankfurt)'
                },
                {
                  'eu-west-1': 'EU (Ireland)'
                },
                {
                  'sa-east-1': 'South America (Sao Paulo)'
                },
                {
                  'us-east-1': 'US East (N. Virginia)'
                },
                {
                  'us-west-1': 'US West (N. California)'
                },
                {
                  'us-west-2': 'US West (Oregon)'
                }
              ]
            }
          ],
          'optional': [
            {
              'name': 'Encrypted',
              'type': 'Boolean',
              'description': ''
            },
            {
              'name': 'Iops',
              'type': 'Number',
              'description': ''
            },
            {
              'name': 'Size',
              'type': 'String',
              'description': ''
            },
            {
              'name': 'SnapshotId',
              'type': 'String',
              'description': ''
            },
            {
              'name': 'Tags',
              'type': 'Tags',
              'description': 'An arbitrary set of tags (key–value pairs) for this volume.'
            },
            {
              'name': 'VolumeType',
              'type': 'String',
              'description': ''
            }
          ],
          'parent': 'EC23',
          'isDerived': true,
          'blockType': 'drag',
          'index': 0
        },
        'ELB7': {
          'id': 'ELB7',
          'type': 'AWS::ElasticLoadBalancing::LoadBalancer',
          'name': 'ELB7',
          'description': 'Automatically distributes incoming application traffic across multiple EC2 instances',
          'image': 'images/aws/elb.png',
          'x': 354,
          'y': 91,
          'optional': [
            {
              'name': 'AccessLoggingPolicy',
              'type': 'AccessLoggingPolicy',
              'description': 'Captures detailed information for all requests made to your load balancer, such as the time a request was received, client’s IP address, latencies, request path, and server responses.'
            },
            {
              'name': 'AvailabilityZones',
              'type': 'AvailabilityZones',
              'description': 'The Availability Zones in which to create the load balancer. You can specify either AvailabilityZones or Subnets, but not both.'
            }
          ],
          'parent': '',
          'blockType': 'box'
        }
      },
      connections: {
        'EC21': {
          'BlockDeviceMappings4': 'BlockDeviceMappings4',
          'ELB7': 'ELB7'
        },
        'EC22': {
          'BlockDeviceMappings5': 'BlockDeviceMappings5',
          'ELB7': 'ELB7'
        },
        'EC23': {
          'BlockDeviceMappings6': 'BlockDeviceMappings6',
          'ELB7': 'ELB7'
        }
      },
      template: {
        'AWSTemplateFormatVersion': '2010-09-09',
        'Description': 'Created By pdestal',
        'Parameters': {},
        'Mappings': {},
        'Conditions': {},
        'Resources': {
          'EC21': {
            'Type': 'AWS::EC2::Instance',
            'Properties': {
              'AvailabilityZone': 'ap-southeast-1b',
              'InstanceType': 'm3.medium',
              'BlockDeviceMappings': [
                {}
              ]
            }
          },
          'EC22': {
            'Type': 'AWS::EC2::Instance',
            'Properties': {
              'AvailabilityZone': 'eu-west-1b',
              'InstanceType': 'm3.medium',
              'BlockDeviceMappings': [
                {}
              ]
            }
          },
          'EC23': {
            'Type': 'AWS::EC2::Instance',
            'Properties': {
              'AvailabilityZone': 'us-west-2b',
              'InstanceType': 'm3.large',
              'BlockDeviceMappings': [
                {}
              ]
            }
          },
          'ELB7': {
            'Type': 'AWS::ElasticLoadBalancing::LoadBalancer',
            'Properties': {}
          }
        },
        'Outputs': {
          'EC21ImageId': {
            'Description': 'Name of the EC2 instance',
            'Value': {
              'Ref': 'EC21'
            }
          },
          'EC22ImageId': {
            'Description': 'Name of the EC2 instance',
            'Value': {
              'Ref': 'EC22'
            }
          },
          'EC23ImageId': {
            'Description': 'Name of the EC2 instance',
            'Value': {
              'Ref': 'EC23'
            }
          }
        }
      }
    };

    $scope.loadInfraFromAWS = function () {
      $timeout(function () {
        $modalInstance.close(infra);
      }, 1500);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

  }]);


app.controller('CodeGenCtrl', ['$scope', '$rootScope', '$modalInstance', '$timeout',
  function ($scope, $rootScope, $modalInstance, $timeout) {

    $scope.downloadReady = false;
    $scope.ok = function () {

      if ($scope.downloadReady) {
        $modalInstance.close();
      }
      else {
        $timeout(function () {
          $scope.downloadReady = true;
        }, 1000);
      }
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);


app.controller('OptimizeCtrl', ['$scope', '$rootScope', '$modalInstance', '$timeout', 'component',
  function ($scope, $rootScope, $modalInstance, $timeout, component) {
    $scope.componenetName = component.name;
    $scope.labels = ['11/8', '11/9', '11/10', '11/11', '11/12', '11/13', '11/14', '11/15', '11/16', '11/17', '11/18', '11/19', '11/20', '11/21', '11/22', '11/23', '11/24', '11/25', '11/26', '11/27', '11/28', '11/29', '11/30', '12/1', '12/2', '12/3', '12/4', '12/5', '12/6', '12/7', '12/8'];
    $scope.series = ['current usage', 'suggested capacity'];
    $scope.data = [
      [25, 32, 50, 57, 66, 55, 40, 20, 19, 57, 67, 53, 65, 44, 15, 20, 60, 15, 16, 19, 40, 26, 20, 45, 54, 67, 55, 20, 17, 23],
      [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
    ];
    $scope.colours = [
      {
        fillColor: 'rgba(236, 240, 241,0.5)',
        pointColor: 'rgba(44, 62, 80,1.0)',
        pointHighlightStroke: '#34495e',
        strokeColor: 'rgba(44, 62, 80,1.0)'
      },
      {
        fillColor: 'rgba(23, 188, 184, 0.1)',
        strokeColor: '#17BCB8'
      },
    ];

    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.downloadReady = false;
    $scope.ok = function () {

      if ($scope.downloadReady) {
        $modalInstance.close();
      }
      else {
        $timeout(function () {
          $scope.downloadReady = true;
        }, 1000);
      }
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);
